import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setOccupancy} from '../../../redux/actions/actions';
import { toSentenceCase } from '.././../Grid/gridUtils'


const mapStateToProps = (state) => {
    return {
        occupancy: state.inputParams.occupancy
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setOccupancy: occupancyInput => dispatch(setOccupancy(occupancyInput))
    }
};

class Occupancy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["Primary", "Secondary", "Investment"]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.setOccupancy(value);
    }

    render() {
        const renderDropDownOptions = () => {
            let options = [];
            for (let opt of this.state.options) {
                options.push(<option value={opt} key={opt}>{toSentenceCase(opt)}</option>);
            }
            return options;
        }
        return (
                <div className="form-element">
                    <label>
                        Occupancy
                    </label>
                    <select className="dropdown" value={this.props.occupancy} onChange={this.handleChange}>
                        {renderDropDownOptions()}
                    </select>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Occupancy);