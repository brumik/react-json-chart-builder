import React from 'react'
import { render, act, waitFor } from '@testing-library/react';
import ResponsiveContainer from '../../components/Common/ResponsiveContainer';

describe('Chart/Common/ResponsiveContainer', () => {
    test('should render the responsive container without children', async () => {
        const { container } = render(<ResponsiveContainer
            setWidth={() => { }}
            height={300}
        />);

        await waitFor(() => container.querySelector('div'));

        expect(container).toMatchSnapshot()
    });

    test('should render the responsive container with children', async () => {
        const { container, getByText } = render(<ResponsiveContainer
            setWidth={() => { }}
            height={300}
        >
            <p>This is a test children</p>
        </ResponsiveContainer>);

        await waitFor(() => container.querySelector('div'));
        expect(getByText("This is a test children")).toBeTruthy();
    });
});