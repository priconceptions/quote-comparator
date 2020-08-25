import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App component - Main page", () => {
  test('contains input components', () => {
    const { getByLabelText } = render(<App />);
    const loanSizeInput = getByLabelText('loan-size-input');
    expect(loanSizeInput).toBeInTheDocument();
    const creditScoreInput = getByLabelText('credit-score-input');
    expect(creditScoreInput).toBeInTheDocument();
  });
});
