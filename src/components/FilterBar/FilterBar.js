import React, { Component } from "react";
import LoanSize from "./NumericFilters/LoanSize";
import CreditScore from "./NumericFilters/CreditScore";

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
        this.state = {
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <LoanSize />
                <CreditScore />
                <input type="submit" value="Submit" aria-label="submit"/>
            </form>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);