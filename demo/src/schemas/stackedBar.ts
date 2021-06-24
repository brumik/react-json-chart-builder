import { ChartKind, ChartTopLevelType, ChartType } from '../../../src';

export default [
    {
        id: 1,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 300,
            domainPadding: 20
        },
        xAxis: {
            label: 'Date',
            tickFormat: 'formatDateAsDayMonth'
        },
        yAxis: {
            label: 'Jobs across all clusters'
        },
        api: {
            url: 'demoByTimeStacked',
            method: 'GET'
        }
    },
    {
        id: 2,
        kind: ChartKind.stack,
        parent: 1
    },
    {
        id: 3,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 2,
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
            standalone: true,
            labelName: 'Failed'
        },
        onClick: 'consoleLog'
    },
    {
        id: 4,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 2,
        props: {
            x: 'created_date',
            y: 'successful_count',
            style: {
                data: {
                    fill: '#6EC664'
                }
            }
        },
        tooltip: {
            standalone: true
        }
    }
];