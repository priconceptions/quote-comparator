import { 
    SET_AUTH_TOKEN,
    SET_REFRESH_GRID,
    SET_LOAN_SIZE, 
    SET_CREDIT_SCORE, 
    SET_PROPERTY_TYPE, 
    SET_OCCUPANCY } from '../constants/actionTypes';
import initialState from './initialState';

function rootReducer(state=initialState, action) {
    if (action.type === SET_AUTH_TOKEN) {
        return Object.assign({}, state, {
            authToken: action.payload
        });
    }
    else if (action.type === SET_REFRESH_GRID) {
        return Object.assign({}, state, {
            refreshGrid: action.payload
        });
    }
    else if (action.type === SET_LOAN_SIZE) {
        return Object.assign({}, state, {
            inputParams: {
                ...state.inputParams,
                loanSize: action.payload
            }
        });
    }
    else if (action.type === SET_CREDIT_SCORE) {
        return Object.assign({}, state, {
            inputParams: {
                ...state.inputParams,
                creditScore: action.payload
            }
        });
    }
    else if (action.type === SET_PROPERTY_TYPE) {
        return Object.assign({}, state, {
            inputParams: {
                ...state.inputParams,
                propertyType: action.payload
            }
        });
    }
    else if (action.type === SET_OCCUPANCY) {
        return Object.assign({}, state, {
            inputParams: {
                ...state.inputParams,
                occupancy: action.payload
            }
        });
    }
    return state;
};

export default rootReducer;