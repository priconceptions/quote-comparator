import React from 'react';
// import { render, fireEvent } from '@testing-library/react';
import FilterBar from './FilterBar';
import LoanSize from './NumericFilters/LoanSize';
import { shallow, mount } from 'enzyme';

describe("Filter Bar Input Form", () => {
    test('renders properly', () => {
        const wrapper = shallow(<FilterBar />)
        expect(wrapper.length).toEqual(1);
    });

    test('Loan Size accepts valid numbers', () => {
        const wrapper = mount(<FilterBar />);
        const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('[aria-label="loan-size-input"]').simulate('change', { target: {value: 12300000}});
        wrapper.find('[aria-label="submit"]').simulate('click');
        wrapper.update();
        expect(handleSubmitSpy).toBeCalled();
    });
});