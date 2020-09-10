import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setLoanSize } from '../../../redux/actions/actions';


const mapStateToProps = (state) => {
    return {
        loanSize: state.inputParams.loanSize
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoanSize: loanSizeInput => dispatch(setLoanSize(loanSizeInput))
    };
};

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
        this.props.setLoanSize(value);
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
                            min="0"
                            value={this.props.loanSize} 
                            aria-label="loan-size-input" 
                            onChange={this.handleChange} 
                        />
                        <span>$</span>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoanSize);