import {
    ChartKind,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartThemeColor,
    ChartTooltipType,
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
            params: {
                status: [],
                org_id: [],
                quick_date_range: 'last_2_weeks',
                job_type: ['workflowjob', 'job'],
                cluster_id: [],
                template_id: [],
                start_date: null,
                end_date: null,
                attributes: ['total_count'],
                group_by_time: true,
                group_by: 'org',
                sort_by: 'total_count:desc'
            },
            // url: 'https://prod.foo.redhat.com:1337tower-analytics/v1/job_explorer/?limit=5'
            url: 'demoByTimeGrouped',
            method: 'GET'
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
        template: {
            id: 0,
            kind: ChartKind.simple,
            type: ChartType.bar,
            parent: 0,
            props: {
                x: 'created_date',
                y: 'total_count'
            },
            tooltip: {
                type: ChartTooltipType.default,
                props: {}
            }
        }
    }
];