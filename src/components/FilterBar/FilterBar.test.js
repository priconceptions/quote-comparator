import React from 'react';
import { render, fireEvent, screen } from '../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import FilterBar from './FilterBar';

describe("Filter Bar Input Form", () => {
    const setup = () => {
        const component = render(<FilterBar />);
        const loanSizeInput = component.getByLabelText('loan-size-input');
        const submit = component.getByLabelText('submit');
        return {
            loanSizeInput,
            submit,
            component
        }
    }

    test('Contains Loan Size Input', () => {
        const { loanSizeInput } = setup();
        expect(loanSizeInput).toBeInTheDocument();
    });
    // test('Loan Size input does not accept invalid numbers to be inputted', () => {
    //     const { loanSizeInput, submit, component} = setup();
    //     fireEvent.change(loanSizeInput, { target: { value: -50}});
    //     fireEvent.click(submit);
    //     const style = window.getComputedStyle(loanSizeInput);
    //     expect(style.borderColor).toBe('red');
    // });

});