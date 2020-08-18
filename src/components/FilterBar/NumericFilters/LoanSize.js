import React, { Component, Fragment } from "react";


class LoanSize extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        // if (value < 50000) {
        //     value = '';
        // }
        this.setState({
            value: value
        });
    }

    render() {
        return (
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
        );
    }
}

export default LoanSize;