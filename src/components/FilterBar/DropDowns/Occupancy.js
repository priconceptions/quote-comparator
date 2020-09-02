import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setOccupancy} from '../../../redux/actions/actions';


const mapStateToProps = (state) => {
    return {
        occupancy: state.occupancy
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
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.setOccupancy(value);
    }

    render() {
        return (
                <div className="form-element">
                    <label>
                        Occupancy
                    </label>
                    <select className="dropdown" value={this.props.occupancy} onChange={this.handleChange}>
                        <option value="Primary">Primary</option>
                        <option value="Secondary">Secondary</option>
                        <option value="Investment">Investment</option>
                    </select>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Occupancy);