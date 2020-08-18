import React, { Component } from "react";
import LoanSize from "./NumericFilters/LoanSize"


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
                <input type="submit" value="Submit" aria-label="submit"/>
            </form>
        );
    }
}

export default FilterBar;