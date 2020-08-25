import { SET_LOAN_SIZE, SET_CREDIT_SCORE } from '../constants/actionTypes';
import initialState from './initialState';

function rootReducer(state=initialState, action) {
    if (action.type === SET_LOAN_SIZE) {
        return Object.assign({}, state, {
           loanSize: action.payload 
        });
    }
    else if (action.type === SET_CREDIT_SCORE) {
        return Object.assign({}, state, {
            creditScore: action.payload
        });
    }
    return state;
};

export default rootReducer;