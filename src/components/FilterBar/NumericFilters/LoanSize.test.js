import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoanSize from "./LoanSize";

describe("Test Loan Size Input Form", () => {
    const setup = () => {
        const component = render(<LoanSize />);
        const input = component.getByLabelText('loan-size-input');
        return {
            input,
            ...component
        }
    }

    test('Document contains Loan Size input that is empty on intial load', () => {
        const { input } = setup();
        expect(input.value).toBe('');
    });
      
    test('It accepts numerical input values', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 450000}});
        expect(input.value).toBe('450000');
    });

    test('It does not accept alphabetical input values', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'Hi'}});
        expect(input.value).toBe('');
    });

    // test('It does not accept invalid numbers to be inputted', () => {
    //     const { input } = setup();
    //     fireEvent.change(input, { target: { value: -50}});
    //     const style = window.getComputedStyle(input);
    //     expect(style.borderColor).toBe('red');
    // });

    // test('It does not accept values less than 50000 (typical minimum mortgage amount)', () => {
    //     const { input } = setup();
    //     fireEvent.change(input, { target: { value: 49999}});
    //     expect(input.value).toBe('');
    // });
});

