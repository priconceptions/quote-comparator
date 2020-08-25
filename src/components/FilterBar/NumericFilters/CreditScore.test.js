import React from 'react';
import { render, fireEvent, screen } from '../../../test-utils';
import '@testing-library/jest-dom/extend-expect';
import CreditScore from "./CreditScore";

describe("Test Credit Score Input Form", () => {
    const setup = () => {
        const component = render(<CreditScore />);
        const input = component.getByLabelText('credit-score-input');
        return {
            input,
            ...component
        }
    }

    test('Document contains Credit Size input that is empty on intial load', () => {
        const { input } = setup();
        expect(input.value).toBe('');
    });
      
    test('It accepts numerical input values', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 350}});
        expect(input.value).toBe('350');
    });

    test('It does not accept alphabetical input values', () => {
        const { input } = setup();
        fireEvent.change(input, { target: { value: 'Hello'}});
        expect(input.value).toBe('');
    });
});

