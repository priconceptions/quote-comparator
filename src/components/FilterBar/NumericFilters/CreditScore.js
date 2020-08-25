import React, { Component } from "react";

class CreditScore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({
            value: value
        });
    }

    render() {
        return (
                <div className="form-element">
                    <label>
                        Credit Score
                    </label>
                    <input 
                        type="number" 
                        required 
                        min="300"
                        max="850"
                        value={this.state.value} 
                        aria-label="credit-score-input" 
                        onChange={this.handleChange} 
                    />
                </div>
        );
    }
}

export default CreditScore;