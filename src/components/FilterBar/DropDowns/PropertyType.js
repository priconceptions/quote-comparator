import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setPropertyType } from '../../../redux/actions/actions';


const mapStateToProps = (state) => {
    return {
        propertyType: state.propertyType
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPropertyType: propertyTypeInput => dispatch(setPropertyType(propertyTypeInput))
    }
};

class PropertyType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.setPropertyType(value);
    }

    render() {
        return (
                <div className="form-element">
                    <label>
                        Property Type
                    </label>
                    <select className="dropdown" value={this.props.propertyType} onChange={this.handleChange}>
                        <option value="SingleFamily">SingleFamily</option>
                        <option value="Condo">Condo</option>
                        <option value="Townhouse">Townhouse</option>
                        <option value="MultiFamily">MultiFamily</option>
                    </select>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyType);