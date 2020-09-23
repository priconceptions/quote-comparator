import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import getQuotes from '../../api/getQuotes';
import { jsonToColumnDefs } from './gridUtils';
import { toast } from "react-toastify";


const mapStateToProps = (state) => {
    return {
        authToken: state.authToken,
        inputParams: state.inputParams,
        refreshGrid: state.refreshGrid
    };
}

class QuotesDisplay extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [],
            rowData: []
        }

        this.fetchQuotes = this.fetchQuotes.bind(this);
    }

    componentDidMount() {
        this.fetchQuotes();
    }

    fetchQuotes() {
        getQuotes(this.props.authToken, this.props.inputParams)
        .then(data => {
            if (data.errorStatus) {
                toast.error("😳 Fetching the API failed with error code:" + data.errorStatus + " " + data.errorMessage);
            }
            else if (data.rateQuotes && data.rateQuotes.length > 0) {
                this.setState({
                    columnDefs: jsonToColumnDefs(data.rateQuotes[0]),
                    rowData: data.rateQuotes
                }, () => toast.success("🎉 Grid Updated!"))
            }
            else if (data.rateQuotes.length === 0){
                this.setState({
                    rowData: data.rateQuotes
                }, () => toast.warning("😕 Looks like we don't have data for these parameters. Try tweaking the inputs!"));
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps.refreshGrid !== this.props.refreshGrid) {
            this.fetchQuotes();
        }
    }

    onFirstDataRendered = params => {
        params.api.sizeColumnsToFit();
    };

    render() {
        const gridOptions = {
          defaultColDef: {
            editable: false,
            sortable: true,
            resizable: true,
            suppressSizeToFit: false
          }
        }
        return (
            <div className="ag-theme-alpine">
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={this.state.rowData}
              suppressDragLeaveHidesColumns={true}
              gridOptions={gridOptions}
              onFirstDataRendered={this.onFirstDataRendered.bind(this)}
              >
            </AgGridReact>
          </div>
        );
    }
}

export default connect(mapStateToProps, null)(QuotesDisplay);