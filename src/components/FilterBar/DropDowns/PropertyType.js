import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setPropertyType } from '../../../redux/actions/actions';

import { toSentenceCase } from '.././../Grid/gridUtils'


const mapStateToProps = (state) => {
    return {
        propertyType: state.inputParams.propertyType
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
            options: ["SingleFamily", "Condo", "Townhouse", "MultiFamily"]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.setPropertyType(value);
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
                        Property Type
                    </label>
                    <select className="dropdown" value={this.props.propertyType} onChange={this.handleChange}>
                        {renderDropDownOptions()}
                    </select>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyType);