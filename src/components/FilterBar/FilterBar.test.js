import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';

describe("Filter Bar Input Form", () => {
    const setup = () => {
        const component = render(<FilterBar />);
        const loanSizeInput = component.getByLabelText('loan-size-input');
        const submit = component.getByLabelText('submit');
        return {
            loanSizeInput,
            submit,
            ...component
        }
    }

    test('Loan Size input does not accept invalid numbers to be inputted', () => {
        const { loanSizeInput, submit } = setup();
        fireEvent.change(loanSizeInput, { target: { value: -50}});
        fireEvent.click(submit);
        // expect(handleSubmitSpy.toBeCalled())
    });

});