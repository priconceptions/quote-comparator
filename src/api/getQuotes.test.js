import getQuotes from './getQuotes';
import { QUOTES_URL } from './apiConstants';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(
        {
            "rateQuotes": [
                {
                    "lenderName": "Lender1",
                    "loanType": "loanType1",
                    "interestRate": 3,
                    "closingCosts": 5000,
                    "monthlyPayment": 1000,
                    "apr": 3.20
                },
                {
                    "lenderName": "Lender2",
                    "loanType": "loanType2",
                    "interestRate": 4,
                    "closingCosts": 6000,
                    "monthlyPayment": 2000,
                    "apr": 3.30
                }
            ]
        }
    ),
  })
);

describe('getQuotes - fetch works as expected', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('getQuotes function works as expected', async () => {
        const data = await getQuotes("sampleAuthToken", {
            loanSize: 4500000, 
            creditScore: 680, 
            propertyType: 'Condo', 
            occupancy: 'Primary'
        });
        expect(data.rateQuotes.length).toBe(2);
        expect(fetch).toHaveBeenCalledWith(
            `${QUOTES_URL}?creditScore=680&loanSize=4500000&occupancy=Primary&propertyType=Condo`, 
            {"headers": {"map": {"authorization": "sampleAuthToken"}}, "method": "GET", "redirect": "follow"}
        );
    });
});