import {
    ChartKind,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartTopLevelType,
    ChartType,
    ChartThemeColor
} from '../../../src';

export default [
    {
        id: 1,
        kind: ChartKind.wrapper,
        type: ChartTopLevelType.chart,
        parent: null,
        props: {
            height: 400,
            padding: {
                top: 40,
                bottom: 85,
                right: 90,
                left: 90
            },
            domainPadding: {
                y: 25
            },
            themeColor: ChartThemeColor.multiOrdered
        },
        xAxis: {
            label: 'Date',
            style: {
                axisLabel: {
                    padding: 50
                }
            }
        },
        yAxis: {
            tickFormat: 'formatNumberAsK',
            showGrid: true,
            label: 'Label Y',
            style: {
                axisLabel: {
                    padding: 60
                }
            }
        },
        api: {
            url: 'legendLikeTooltip',
            method: 'GET'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right,
            turncateAt: 13,
            wrapText: true
        },
        tooltip: {
            mouseFollow: true,
            stickToAxis: 'x',
            cursor: true,
            legendTooltip: {}
        }
    },
    {
        id: 2,
        kind: ChartKind.group,
        parent: 1,
        template: {
            id: 0,
            kind: ChartKind.simple,
            type: ChartType.line,
            parent: 0,
            props: {
                x: 'created_date',
                y:  'total_unique_host_count'
            },
            tooltip: {
                labelName: ''
            }
        }
    }
];
