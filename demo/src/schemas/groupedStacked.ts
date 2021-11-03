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
            label: 'Time',
            labelProps: {
                angle: -45
            }
        },
        yAxis: {
            label: 'Money Saved',
            tickFormat: 'formatNumberAsK',
            labelProps: {
                angle: -90,
                textAnchor: 'middle'
            },
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
            cursor: true,
            stickToAxis: 'x',
            mouseFollow: true,
            legendTooltip: {
                legendData: [
                    {
                        childName: 'total_costs',
                        name: 'Total costs',
                        symbol: {
                            fill: '#8B8D8F'
                        }
                    },
                    {
                        childName: 'total_benefits',
                        name: 'Total benefits',
                        symbol: {
                            fill: '#81C46B'
                        }
                    },
                    {
                        childName: 'cumulative',
                        name: 'Cumulative benefits',
                        symbol: {
                            fill: '#EE7A00'
                        }
                    }
                ],
                titleProperyForLegend: 'year'
            }
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
        name: 'total_costs',
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
        },
        tooltip: {
            labelName: ''
        }
    },
    {
        id: 4,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 2,
        name: 'total_benefits',
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
        },
        tooltip: {
            labelName: ''
        }
    },
    {
        id: 5,
        kind: ChartKind.simple,
        type: ChartType.line,
        parent: 1,
        name: 'cumulative',
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
        tooltip: {
            labelName: ''
        }
    }
];