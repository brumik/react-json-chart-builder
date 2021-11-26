import {
    ChartKind,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartThemeColor,
    ChartTopLevelType,
    ChartType
} from '../../../src';

export default [
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
            tickFormat: 'formatDateAsDayMonth'
        },
        yAxis: {
            label: 'Jobs across organizations'
        },
        api: {
            url: 'demoByTimeGrouped',
            method: 'GET'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right,
            hasTooltip: true
        }
    },
    {
        id: 3100,
        kind: ChartKind.group,
        parent: 3000,
        template: 3101
    },
    {
        id: 3101,
        kind: ChartKind.simple,
        type: ChartType.bar,
        parent: 0,
        props: {
            x: 'created_date',
            y: 'total_count'
        },
        tooltip: {
            standalone: true
        }
    }
];