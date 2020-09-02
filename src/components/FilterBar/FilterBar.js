import React, { Component } from "react";
import LoanSize from "./NumericFilters/LoanSize";
import CreditScore from "./NumericFilters/CreditScore";
import PropertyType from './DropDowns/PropertyType';
import Occupancy from './DropDowns/Occupancy';

import { connect } from 'react-redux';
import { setLoanSize } from '../../redux/actions/actions';


const mapStateToProps = (state) => {
    return {
        loanSize: state.loanSize,
        creditScore: state.creditScore
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoanSize: loanSizeInput => dispatch(setLoanSize(loanSizeInput))
    };
}

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <form className="filter-bar-form" onSubmit={this.handleSubmit}>
                <LoanSize />
                <PropertyType type="propertyType"/>
                <CreditScore />
                <Occupancy />
                <input type="submit" className="form-element" value="Submit" aria-label="submit"/>
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);