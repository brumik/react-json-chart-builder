import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import { pieChartResponse } from '../assets/fetchResponses';
import CreatePieChart from '../../components/Renderers/CreatePieChart';
import {
    ChartKind,
    ChartTopLevelType,
    functions,
    ChartSchemaElement,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartTopSchemaElement
} from '../../index';

const pieChartSchemaNoLegend: ChartSchemaElement[] = [
    {
        id: 4000,
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
            url: 'http://piechart.url',
            method: 'POST'
        }
    }
];

const pieChartSchemaLegend: ChartSchemaElement[] = [
    {
        ...(pieChartSchemaNoLegend[0] as ChartTopSchemaElement),
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right
        }
    }
];

const pieChartSchemaLegendNoY: ChartSchemaElement[] = [
    {
        id: 4000,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.pie,
        parent: null,
        props: {
            height: 300
        },
        api: {
            params: {
                group_by: 'org',
                include_others: true,
                attributes: ['host_count'],
                sort_by: `total_count:desc`
            },
            url: 'http://piechart.url',
            method: 'POST'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right
        }
    }
];

describe('Chart/Renderers/CreatePieChart', () => {
    afterEach(() => fetchMock.restore());

    test('should render a pie chart', async () => {
        fetchMock.post({ url: 'http://piechart.url' }, pieChartResponse);

        const { container } = render(<CreatePieChart
            id={4000}
            data={{
                charts: pieChartSchemaNoLegend,
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a pie chart with legend', async () => {
        fetchMock.post({ url: 'http://piechart.url' }, pieChartResponse);

        const { container, getByText } = render(<CreatePieChart
            id={4000}
            data={{
                charts: pieChartSchemaLegend,
                functions
            }}
        />);
        await waitFor(() => getByText('organization_0'));

        expect(container).toMatchSnapshot();
    });

    test('should re-render a pie chart after legend click', async () => {
        fetchMock.post({ url: 'http://piechart.url' }, pieChartResponse);

        const { container, getByText } = render(<CreatePieChart
            id={4000}
            data={{
                charts: pieChartSchemaLegend,
                functions
            }}
        />);

        await waitFor(() => getByText('organization_0'));
        expect(container).toMatchSnapshot();
        
        fireEvent.click(getByText('organization_0'));
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a 0 data chart without specifying the y name', async () => {
        fetchMock.post({ url: 'http://piechart.url' }, pieChartResponse);

        const { container, getByText } = render(<CreatePieChart
            id={4000}
            data={{
                charts: pieChartSchemaLegendNoY,
                functions
            }}
        />);

        await waitFor(() => getByText('organization_0'));
        expect(container).toMatchSnapshot();
    });
});