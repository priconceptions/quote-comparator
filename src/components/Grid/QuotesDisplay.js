import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import getQuotes from '../../api/getQuotes';
import { jsonToColumnDefs } from './gridUtils';

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
    }

    componentDidMount() {
        getQuotes(this.props.authToken, this.props.inputParams)
        .then(data => {
            if (data.rateQuotes) {
                this.setState({
                    columnDefs: jsonToColumnDefs(data.rateQuotes[0]),
                    rowData: data.rateQuotes
                })
            }
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.refreshGrid !== this.props.refreshGrid) {
            getQuotes(this.props.authToken, this.props.inputParams)
            .then(data => {
                if (data.rateQuotes) {
                    this.setState({
                        columnDefs: jsonToColumnDefs(data.rateQuotes[0]),
                        rowData: data.rateQuotes
                    })
                }
            })
            .catch(err => console.log(err))
        }
    }

    onFirstDataRendered = params => {
        params.api.sizeColumnsToFit();
    };

    render() {
        const gridOptions = {
          defaultColDef: {
            editable: true,
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
              gridOptions={gridOptions}
              onFirstDataRendered={this.onFirstDataRendered.bind(this)}
              >
            </AgGridReact>
          </div>
        );
    }
}

export default connect(mapStateToProps, null)(QuotesDisplay);