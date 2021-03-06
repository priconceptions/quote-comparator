import { 
    setAuthToken,
    setRefreshGrid,
    setLoanSize,
    setCreditScore,
    setPropertyType,
    setOccupancy
 } from './actions';

describe("Redux actions", () => {
    it("setAuthToken - returns the correct type and payload for object", () => {
        const result = setAuthToken("1234");
        expect(result).toEqual({type: "SET_AUTH_TOKEN", payload: "1234"})
    })
    it('setRefreshGrid - returns the correct type and payload for object', () => {
        const result = setRefreshGrid(true);
        expect(result).toEqual({type: "SET_REFRESH_GRID", payload: true})
    });
    it("setLoanSize - returns the correct type and payload for object", () => {
        const result = setLoanSize(100000);
        expect(result).toEqual({type: "SET_LOAN_SIZE", payload: 100000})
    })
    it("setCreditScore - returns the correct type and payload for object", () => {
        const result = setCreditScore(260);
        expect(result).toEqual({type: "SET_CREDIT_SCORE", payload: 260})
    })
    it("setPropertyType - returns the correct type and payload for object", () => {
        const result = setPropertyType("Investment");
        expect(result).toEqual({type: "SET_PROPERTY_TYPE", payload: "Investment"})
    })
    it("setOccupancy - returns the correct type and payload for object", () => {
        const result = setOccupancy("SingleFamily");
        expect(result).toEqual({type: "SET_OCCUPANCY", payload: "SingleFamily"})
    })
});