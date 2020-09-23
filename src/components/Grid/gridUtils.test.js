import { jsonToColumnDefs, currencyFormatter, percentFormatter, toSentenceCase, containsKeyWord } from './gridUtils';

describe('gridUtils functions work as expected', () => {
    it('jsonToColumnDefs returns ag-grid compatible column def object', () => {
        let sampleRowData = {
            "firstField": "Hi",
            "SecondField": "Hello",
            "paymentField": 123,
            "rateField": 1.234
        };
        expect(jsonToColumnDefs(sampleRowData)).toStrictEqual([
            {headerName: "First Field", field: "firstField", type: null, valueFormatter: null},
            {headerName: "Second Field", field: "SecondField", type: null, valueFormatter: null},
            {headerName: "Payment Field", field: "paymentField", type: 'numericColumn', valueFormatter: currencyFormatter},
            {headerName: "Rate Field", field: "rateField", type: 'numericColumn', valueFormatter: percentFormatter},

        ])
    });

    it('toSentenceCase changes camel case text to sentence case', () => {
        expect(toSentenceCase('camelCase')).toBe('Camel Case');
        expect(toSentenceCase('CamelCase')).toBe('Camel Case');
        expect(toSentenceCase('CamelCaseWord')).toBe('Camel Case Word');
    });

    it('currencyFormatter returns value formatted with $ in beginning', () => {
        const params = {value: 3000.3456};
        const output = currencyFormatter(params);
        expect(output).toBe('$3000.35');
    });

    it('percentFormatter returns value formatted with % at end', () => {
        const params = {value: 1.2345};
        const output = percentFormatter(params);
        expect(output).toBe('1.234%');
    });

    it('containsKeyWord returns whether a string contains any substring in an array', () => {
        expect(containsKeyWord("helloWorld", ["hell", "apple"])).toBe(true);
        expect(containsKeyWord("helloWorld", ["hell", "world"])).toBe(true);
        expect(containsKeyWord("helloWorld", ["banana", "apple"])).toBe(false);
    });
});