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
        // console.log(e);
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-element">
                    <label>
                        Loan Size
                    </label>
                    <div className="currency-input">
                        <input 
                            type="number" 
                            required 
                            min="50000"
                            value={this.state.value} 
                            aria-label="loan-size-input" 
                            onChange={this.handleChange} 
                        />
                        <span>$</span>
                    </div>
                </div>
                <input type="submit" value="Submit" aria-label="submit"/>
            </form>
        );
    }
}

export default FilterBar;