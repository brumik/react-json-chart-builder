import { ChartKind, ChartTopLevelType, ChartType } from '../../../src';

export default [
    {
        id: 1,
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
        tooltip: {
            cursor: true
        },
        api: {
            url: 'demoByTimeStacked',
            method: 'GET'
        }
    },
    {
        id: 2,
        kind: ChartKind.group,
        parent: 1,
        props: {}
    },
    {
        id: 3,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 2,
        props: {
            x: 'created_date',
            y: 'failed_count',
            style: {
                data: {
                    stroke: '#A30000'
                }
            }
        },
        tooltip: {
            labelName: 'Failed'
        },
        onClick: 'consoleLog'
    },
    {
        id: 4,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 2,
        props: {
            x: 'created_date',
            y: 'successful_count',
            style: {
                data: {
                    stroke: '#6EC664'
                }
            }
        }
    }
];