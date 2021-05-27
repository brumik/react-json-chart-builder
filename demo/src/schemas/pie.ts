import {
    ChartKind,
    ChartLegendOrientation,
    ChartLegendPosition,
    ChartTopLevelType
} from '../../../src';

export default [
    {
        id: 1,
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
                sort_by: 'total_count:desc'
            },
            // url: 'https://prod.foo.redhat.com:1337tower-analytics/v1/job_explorer/?limit=5'
            url: 'demoByOrgPie',
            method: 'GET'
        },
        legend: {
            interactive: true,
            orientation: ChartLegendOrientation.vertical,
            position: ChartLegendPosition.right
        }
    }
];