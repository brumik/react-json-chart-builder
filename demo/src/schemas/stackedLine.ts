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
            params: {
                status: ['successful', 'failed'],
                quick_date_range: 'last_30_days',
                job_type: ['workflowjob', 'job'],
                group_by_time: true,
                org_id: [],
                cluster_id: [],
                template_id: [],
                only_root_workflows_and_standalone_jobs: false,
                attributes: ['failed_count', 'successful_count']
            },
            // url: 'https://prod.foo.redhat.com:1337tower-analytics/v1/job_explorer/'
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