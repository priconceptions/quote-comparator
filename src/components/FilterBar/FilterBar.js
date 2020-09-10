import React, { Component } from "react";
import LoanSize from "./NumericFilters/LoanSize";
import CreditScore from "./NumericFilters/CreditScore";
import PropertyType from './DropDowns/PropertyType';
import Occupancy from './DropDowns/Occupancy';

import { connect } from 'react-redux';
import { setLoanSize, setRefreshGrid } from '../../redux/actions/actions';


const mapStateToProps = (state) => {
    return {
        loanSize: state.inputParams.loanSize,
        creditScore: state.creditScore,
        refreshGrid: state.refreshGrid
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoanSize: loanSizeInput => dispatch(setLoanSize(loanSizeInput)),
        setRefreshGrid: refreshGridVal => dispatch(setRefreshGrid(refreshGridVal))
    };
}

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.setRefreshGrid(!this.props.refreshGrid);
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