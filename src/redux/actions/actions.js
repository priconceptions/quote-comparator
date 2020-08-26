import { 
    SET_LOAN_SIZE, 
    SET_CREDIT_SCORE,
    SET_PROPERTY_TYPE,
    SET_OCCUPANCY
 } from '../constants/actionTypes';

export function setLoanSize(payload) { 
    return {type: SET_LOAN_SIZE, payload};
};

export function setCreditScore(payload) { 
    return {type: SET_CREDIT_SCORE, payload};
};

export function setPropertyType(payload) { 
    return {type: SET_PROPERTY_TYPE, payload};
};

export function setOccupancy(payload) { 
    return {type: SET_OCCUPANCY, payload};
};