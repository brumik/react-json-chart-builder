export default {
    'response_type': 'jobs_by_org',
    'items': [
        {
            'host_count': 3895,
            'total_count': 525,
            'id': 2,
            'name': 'organization_0'
        },
        {
            'host_count': 95925,
            'total_count': 446,
            'id': -2,
            'name': ''
        },
        {
            'host_count': 2515,
            'total_count': 387,
            'id': 3,
            'name': 'organization_1'
        },
        {
            'host_count': 2515,
            'total_count': 387,
            'id': 4,
            'name': 'organization_3'
        },
        {
            'host_count': 2515,
            'total_count': 387,
            'id': 1,
            'name': 'organization_2'
        },
        {
            'host_count': 58300,
            'id': -1,
            'name': '26 Others'
        }
    ],
    'meta': {
        'count': 31,
        'options': {
            'attributes': [
                {
                    'key': 'total_count',
                    'value': 'Total jobs count'
                },
                {
                    'key': 'successful_count',
                    'value': 'Successful jobs count'
                },
                {
                    'key': 'failed_count',
                    'value': 'Failed jobs count'
                },
                {
                    'key': 'error_count',
                    'value': 'Error jobs count'
                },
                {
                    'key': 'waiting_count',
                    'value': 'Waiting jobs count'
                },
                {
                    'key': 'pending_count',
                    'value': 'Pending jobs count'
                },
                {
                    'key': 'canceled_count',
                    'value': 'Canceled jobs count'
                },
                {
                    'key': 'new_count',
                    'value': 'New jobs count'
                },
                {
                    'key': 'running_count',
                    'value': 'Running jobs count'
                },
                {
                    'key': 'elapsed',
                    'value': 'Elapsed time'
                },
                {
                    'key': 'host_count',
                    'value': 'Host count'
                },
                {
                    'key': 'failed_host_count',
                    'value': 'Failed host count'
                },
                {
                    'key': 'unreachable_host_count',
                    'value': 'Unreachable host count'
                },
                {
                    'key': 'changed_host_count',
                    'value': 'Changed host count'
                },
                {
                    'key': 'ok_host_count',
                    'value': 'Ok host count'
                },
                {
                    'key': 'skipped_host_count',
                    'value': 'Skipped host count'
                },
                {
                    'key': 'host_task_changed_count',
                    'value': 'Changed tasks count'
                },
                {
                    'key': 'host_task_count',
                    'value': 'Tasks count'
                },
                {
                    'key': 'host_task_failed_count',
                    'value': 'Failed tasks count'
                },
                {
                    'key': 'host_task_ok_count',
                    'value': 'Successful tasks count'
                },
                {
                    'key': 'host_task_retry_count',
                    'value': 'Retried tasks count'
                },
                {
                    'key': 'host_task_skipped_count',
                    'value': 'Skipped tasks count'
                },
                {
                    'key': 'host_task_unreachable_count',
                    'value': 'Unreachable tasks count'
                },
                {
                    'key': 'host_task_ignored_failed_count',
                    'value': 'Ignored failed tasks count'
                },
                {
                    'key': 'host_task_ignored_unreachable_count',
                    'value': 'Ignored unreachable tasks count'
                },
                {
                    'key': 'host_task_rescued_failed_count',
                    'value': 'Rescued failed tasks count'
                },
                {
                    'key': 'host_task_rescued_unreachable_count',
                    'value': 'Rescued unreachable tasks count'
                },
                {
                    'key': 'average_elapsed_per_host',
                    'value': 'Average elapsed time per host'
                },
                {
                    'key': 'average_host_task_count_per_host',
                    'value': 'Average tasks count per host'
                },
                {
                    'key': 'average_host_task_ok_count_per_host',
                    'value': 'Average ok task count per host'
                },
                {
                    'key': 'average_host_task_failed_count_per_host',
                    'value': 'Average failed task count per host'
                },
                {
                    'key': 'average_host_task_unreachable_count_per_host',
                    'value': 'Average unreachable task count per host'
                },
                {
                    'key': 'average_host_task_skipped_count_per_host',
                    'value': 'Average skipped task count per host'
                },
                {
                    'key': 'average_host_task_retry_count_per_host',
                    'value': 'Average retried task count per host'
                },
                {
                    'key': 'average_host_task_changed_count_per_host',
                    'value': 'Average changed task count per host'
                },
                {
                    'key': 'average_host_task_ignored_failed_count_per_host',
                    'value': 'Average ignored failed task count per host'
                },
                {
                    'key': 'average_host_task_ignored_unreachable_count_per_host',
                    'value': 'Average ignored unreachable task count per host'
                },
                {
                    'key': 'average_host_task_rescued_failed_count_per_host',
                    'value': 'Average rescued_failed task count per host'
                },
                {
                    'key': 'average_host_task_rescued_unreachable_count_per_host',
                    'value': 'Average rescued unreachable task count per host'
                },
                {
                    'key': 'total_template_count',
                    'value': 'Templates count'
                },
                {
                    'key': 'total_org_count',
                    'value': 'Organizations count'
                },
                {
                    'key': 'total_cluster_count',
                    'value': 'Clusters count'
                },
                {
                    'key': 'total_inventory_count',
                    'value': 'Inventory count'
                },
                {
                    'key': 'most_failed_tasks',
                    'value': 'Most failed tasks'
                },
                {
                    'key': 'most_failed_steps',
                    'value': 'Most failed workflow steps'
                }
            ]
        },
        'selected': {
            'attributes': [
                'host_count'
            ],
            'sort_by': 'total_count:desc'
        }
    },
    'links': {
        'first': '/api/tower-analytics/v1/job_explorer/?sort_by=total_count%3Adesc&limit=5&offset=0',
        'last': '/api/tower-analytics/v1/job_explorer/?sort_by=total_count%3Adesc&limit=5&offset=30',
        'next': '/api/tower-analytics/v1/job_explorer/?sort_by=total_count%3Adesc&limit=5&offset=5',
        'prev': null
    }
}