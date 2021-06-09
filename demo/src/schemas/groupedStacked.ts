import { ChartKind, ChartThemeColor, ChartTopLevelType, ChartType } from '../../../src';

export default [
    {
        id: 1,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 600,
            domainPadding: {
                x: 100
            },
            themeColor: ChartThemeColor.gray
        },
        xAxis: {
            label: 'Time'
        },
        yAxis: {
            label: 'Money Saved',
            tickFormat: 'formatNumberAsK',
            style: {
                grid: { stroke: '#D2D2D2' }
            }
        },
        api: {
            params: {},
            url: 'groupedStacked',
            method: 'GET'
        },
        tooltip: {
            mouseFollow: false,
            stickToAxis: null
        }
    },
    {
        id: 2,
        kind: ChartKind.stack,
        parent: 1,
        props: {}
    },
    {
        id: 3,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 2,
        props: {
            x: 'year',
            y: 'total_costs',
            barRatio: 0.8,
            barWidth: 0,
            style: {
                data: {
                    fill: '#8B8D8F',
                    width: 120
                }
            }
        }
    },
    {
        id: 4,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 2,
        props: {
            x: 'year',
            y: 'total_benefits',
            barRatio: 0.8,
            barWidth: 0,
            style: {
                data: {
                    fill: '#81C46B',
                    width: 120
                }
            }
        }
    },
    {
        id: 5,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 1,
        props: {
            x: 'year',
            y: 'cumulative_net_benefits',
            style: {
                data: {
                    stroke: '#EE7A00',
                    strokeWidth: 5
                }
            }
        },
        tooltip: {}
    }
];