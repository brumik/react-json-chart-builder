import React from 'react'
import { render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import {
    stackedChartResponse,
    pieChartResponse
} from './assets/fetchResponses';
import ChartRenderer from '../components/';
import {
    ChartKind,
    ChartTopLevelType,
    functions,
    ChartSchemaElement,
    ChartType
} from '../index';

const charts: ChartSchemaElement[] = [
    {
        id: 1000,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 300
        },
        xAxis: {
            label: 'Date',
        },
        yAxis: {
            label: 'Jobs across all clusters'
        },
        api: {
            params: {},
            url: 'http://chart1.url'
        }
    },
    {
        id: 1001,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 1000,
        props: {
            x: 'created_date',
            y: 'success_count'
        }
    },
    {
        id: 100,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.pie,
        parent: null,
        props: {
            height: 300,
            x: '',
            y: 'host_count'
        },
        api: {
            params: {
                group_by: 'org',
                include_others: true,
                attributes: ['host_count'],
                sort_by: `total_count:desc`
            },
            url: 'http://chart2.url',
            method: 'POST'
        }
    }
];


describe('Chart/Renderers/CreateWrapper', () => {
    afterEach(() => fetchMock.restore());

    xtest('should render all charts', async () => {
        fetchMock.post({ url: 'http://chart1.url' }, stackedChartResponse);
        fetchMock.post({ url: 'http://chart2.url' }, pieChartResponse);

        const { container } = render(<ChartRenderer
            schema={charts}
            functions={functions}
        />);

        expect(container).toMatchSnapshot();
    });

    test('should render one chart specified in the id', async () => {
        fetchMock.post({ url: 'http://chart1.url' }, stackedChartResponse);
        fetchMock.post({ url: 'http://chart2.url' }, pieChartResponse);

        const { container } = render(<ChartRenderer
            ids={[1000]}
            schema={charts}
            functions={functions}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();

    });

    test('should render two charts specified in the id', async () => {
        fetchMock.post({ url: 'http://chart1.url' }, stackedChartResponse);
        fetchMock.post({ url: 'http://chart2.url' }, pieChartResponse);

        const { container } = render(<ChartRenderer
            ids={[1000, 100]}
            schema={charts}
            functions={functions}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();

    });
});