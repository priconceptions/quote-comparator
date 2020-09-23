import initialState from './initialState';

import { 
    SET_AUTH_TOKEN,
    SET_LOAN_SIZE, 
    SET_CREDIT_SCORE, 
    SET_PROPERTY_TYPE, 
    SET_OCCUPANCY } from '../constants/actionTypes';

import rootReducer from './reducers';

describe('Reducers change redux stroe as expected', () => {
    it('authentication token is set as expected', () => {
        let state = initialState;
        const action = {type: SET_AUTH_TOKEN, payload: 1234};
        state = rootReducer(state, action);
        expect(state.authToken).toEqual(1234);
    });

    it('parameters are set as expected', () => {
        let state = initialState;
        const action1 = {type: SET_CREDIT_SCORE, payload: 430};
        state = rootReducer(state, action1);
        const action2 = {type: SET_LOAN_SIZE, payload: 200000};
        state = rootReducer(state, action2);
        const action3 = {type: SET_PROPERTY_TYPE, payload: "Single Family"};
        state = rootReducer(state, action3);
        const action4 = {type: SET_OCCUPANCY, payload: "Investment"};
        state = rootReducer(state, action4);
        expect(state.inputParams.creditScore).toEqual(430);
        expect(state.inputParams.loanSize).toEqual(200000);
        expect(state.inputParams.propertyType).toEqual("Single Family");
        expect(state.inputParams.occupancy).toEqual("Investment");
        const action5 = {type: SET_OCCUPANCY, payload: "Primary"};
        state = rootReducer(state, action5);
        expect(state.inputParams.occupancy).toEqual("Primary");
    });
});