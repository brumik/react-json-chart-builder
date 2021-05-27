import React from 'react'
import { render, screen } from '@testing-library/react';
import ErrorState from '../../components/Common/ErrorState';

describe('Chart/Common/Error State', () => {
    test('should render the correctly the error state', () => {
        const { container } = render(<ErrorState />);
        expect(container).toMatchSnapshot();
    })
    test('should have Error string in the rendered component', () => {
        render(<ErrorState />);
        expect(screen.getByText("Error")).toBeTruthy();
    })
});