import { SET_LOAN_SIZE, SET_CREDIT_SCORE } from '../constants/actionTypes';

export function setLoanSize(payload) { 
    return {type: SET_LOAN_SIZE, payload};
};

export function setCreditScore(payload) { 
    return {type: SET_CREDIT_SCORE, payload};
};