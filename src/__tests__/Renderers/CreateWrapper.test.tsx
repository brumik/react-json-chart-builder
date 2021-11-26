import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';
import {
    stackedChartResponse,
    groupedChartResponse,
    stackedChartResponseWithY
} from '../assets/fetchResponses';
import CreateWrapper from '../../components/Renderers/CreateWrapper';
import {
    ChartKind,
    ChartTopLevelType,
    functions,
    ChartSchemaElement,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartType,
    ChartTooltipType,
    ChartThemeColor
} from '../../index';

const getSimpleChart = (type: ChartType): ChartSchemaElement[] => ([
    {
        id: 2000,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 300
        },
        xAxis: {
            label: 'Date',
            tickFormat: 'formatDateAsDayMonth'
        },
        yAxis: {
            label: 'Job runs'
        },
        api: {
            params: {},
            url: 'http://chart.url'
        }
    },
    {
        id: 2001,
        kind: ChartKind.simple,
        type,
        parent: 2000,
        props: {
            x: 'created_date',
            y: 'failed_count'
        },
        tooltip: {
            labelName: 'Failed'
        },
        onClick: 'consoleLog'
    }
]);

const getSimpleChartWithoutY = (type: ChartType): ChartSchemaElement[] => ([
    {
        id: 2000,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 300
        },
        xAxis: {
            label: 'Date',
            tickFormat: 'formatDateAsDayMonth'
        },
        yAxis: {
            label: 'Job runs'
        },
        api: {
            params: {},
            url: 'http://chart.url'
        }
    },
    {
        id: 2001,
        kind: ChartKind.simple,
        type,
        parent: 2000,
        props: {
            x: 'created_date',
        },
        tooltip: {
            labelName: 'Failed'
        },
        onClick: 'consoleLog'
    }
]);

const stackedLineChart: ChartSchemaElement[] = [
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
            tickFormat: 'formatDateAsDayMonth'
        },
        yAxis: {
            label: 'Jobs across all clusters'
        },
        api: {
            params: {},
            url: 'http://chart.url'
        }
    },
    {
        id: 1100,
        kind: ChartKind.stack,
        parent: 1000,
        props: {}
    },
    {
        id: 1002,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 1100,
        props: {
            x: 'created_date',
            y: 'failed_count',
            style: {
                data: {
                    fill: '#A30000'
                }
            }
        },
        tooltip: {
            type: ChartTooltipType.default,
            props: {},
            labelName: 'Failed'
        },
        onClick: 'consoleLog'
    },
    {
        id: 1001,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 1100,
        props: {
            x: 'created_date',
            y: 'success_count',
            style: {
                data: {
                    fill: '#6EC664'
                }
            }
        },
        tooltip: {
            type: ChartTooltipType.default,
            props: {}
        }
    },
];

const stackedAnomaly: ChartSchemaElement[] = [
    {
        id: 100,
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
            label: 'Total jobs'
        },
        tooltip: {
            cursor: true
        },
        api: {
            params: {},
            url: 'http://chart.url',
        }
    },
    {
        id: 110,
        kind: ChartKind.group,
        parent: 100,
        props: {}
    },
    {
        id: 112,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 110,
        props: {
            x: 'created_date',
            y: 'failed_count'
        }
    },
    {
        id: 111,
        kind: ChartKind.simple,
        type: ChartType.scatter,
        parent: 110,
        props: {
            x: 'created_date',
            y: 'failed_anomaly',
            size: 7,
            style: {
                data: { fill: "#c43a31" }
            }
        }
    }
];

const groupedBarChart: ChartSchemaElement[] = [
    {
        id: 3000,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 300,
            themeColor: ChartThemeColor.green
        },
        xAxis: {
            label: 'Date',
        },
        yAxis: {
            label: 'Jobs across organizations'
        },
        api: {
            params: {},
            url: 'http://chart.url'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right
        }
    },
    {
        id: 3100,
        kind: ChartKind.group,
        parent: 3000,
        props: {},
        template: 3101,
    },
    {
        id: 3101,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 0,
        props: {
            x: 'created_date',
            y: 'total_count'
        }
    }
]

describe('Chart/Renderers/CreateWrapper', () => {
    afterEach(() => fetchMock.restore());

    test('should render a line chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={2000}
            data={{
                charts: getSimpleChart(ChartType.line),
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a bar chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={2000}
            data={{
                charts: getSimpleChart(ChartType.bar),
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });
    
    test('should render a area chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={2000}
            data={{
                charts: getSimpleChart(ChartType.area),
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render "y" attr when not specified in area chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponseWithY);

        const { container } = render(<CreateWrapper
            id={2000}
            data={{
                charts: getSimpleChartWithoutY(ChartType.area),
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a scatter chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={2000}
            data={{
                charts: getSimpleChart(ChartType.scatter),
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a stacked line chart', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={1000}
            data={{
                charts: stackedLineChart,
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should render a stacked line and scatter chart (anomaly)', async () => {
        fetchMock.post({ url: 'http://chart.url' }, stackedChartResponse);

        const { container } = render(<CreateWrapper
            id={100}
            data={{
                charts: stackedAnomaly,
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });
    
    test('should render a grouped bar with legend', async () => {
        fetchMock.post({ url: 'http://chart.url' }, groupedChartResponse);

        const { container } = render(<CreateWrapper
            id={3000}
            data={{
                charts: groupedBarChart,
                functions
            }}
        />);
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });

    test('should re-render a grouped bar after legend click', async () => {
        fetchMock.post({ url: 'http://chart.url' }, groupedChartResponse);

        const { container, getByText } = render(<CreateWrapper
            id={3000}
            data={{
                charts: groupedBarChart,
                functions
            }}
        />);
        
        await waitFor(() => getByText('organization_0'));
        expect(container).toMatchSnapshot();

        fireEvent.click(getByText('organization_0'));
        await waitFor(() => container.querySelector('svg'));

        expect(container).toMatchSnapshot();
    });
});