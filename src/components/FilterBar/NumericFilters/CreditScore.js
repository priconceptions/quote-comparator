import React, { Component } from "react";

import { connect } from 'react-redux';
import { setCreditScore } from '../../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        creditScore: state.creditScore
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setCreditScore: creditScoreInput => dispatch(setCreditScore(creditScoreInput))
    };
};
class CreditScore extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let value = e.target.value;
        this.props.setCreditScore(value);
    }

    render() {
        return (
                <div className="form-element">
                    <label>
                        Credit Score
                    </label>
                    <div className="currency-input">
                        <input 
                            type="number" 
                            required 
                            min="300"
                            max="850"
                            value={this.props.creditScore} 
                            aria-label="credit-score-input" 
                            onChange={this.handleChange} 
                        />
                        <span> </span>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreditScore);