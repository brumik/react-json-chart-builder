import React from 'react'
import { render, act, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import ResponsiveContainer from '../../components/Common/ResponsiveContainer';
import fetchFnc from '../../components/Functions/fetchFnc';
import { pieChartResponse } from '../assets/fetchResponses';

describe('Chart/Common/ResponsiveContainer', () => {
    afterEach(() => fetchMock.restore());
    
    test('should render the responsive container without children', async () => {
        fetchMock.post({ url: 'http://dummy.url' }, pieChartResponse);

        const { container } = render(<ResponsiveContainer
            setWidth={() => { }}
            height={300}
            api={{ url: 'http://dummy.url', params: {} }}
            setData={() => { }}
            fetchFnc={fetchFnc}
        />);

        await waitFor(() => container.querySelector('div'));

        expect(container).toMatchSnapshot()
    });

    test('should render the responsive container with children', async () => {
        fetchMock.post({ url: 'http://dummy.url' }, pieChartResponse);
        const { container, getByText } = render(<ResponsiveContainer
            setWidth={() => { }}
            height={300}
            api={{ url: 'http://dummy.url', params: {} }}
            setData={() => { }}
            fetchFnc={fetchFnc}
        >
            <p>This is a test children</p>
        </ResponsiveContainer>);

        await waitFor(() => container.querySelector('div'));
        expect(getByText("This is a test children")).toBeTruthy();
    });

    test('should set the data from the fetch function', async () => {
        fetchMock.post({ url: 'http://dummy.url' }, pieChartResponse);
        const setData = jest.fn();
        await act(async () => {
            render(<ResponsiveContainer
                setWidth={() => { }}
                height={300}
                api={{ url: 'http://dummy.url', params: {} }}
                setData={setData}
                fetchFnc={fetchFnc}
            >
                <p>This is a test children</p>
            </ResponsiveContainer>
            );
        });

        expect(setData.mock.calls.length).toBe(1);
    });

    test('should return error state', async () => {
        fetchMock.post({ url: 'http://dummy.url' }, 404);
        const { container, getByText } = render(<ResponsiveContainer
            setWidth={() => { }}
            height={300}
            api={{ url: 'http://dummy.url', params: {} }}
            setData={() => { }}
            fetchFnc={fetchFnc}
        >
            <p>This is a test children</p>
        </ResponsiveContainer>);

        await waitFor(() => container.querySelector('div'));
        expect(getByText("Error")).toBeTruthy();
    });
});