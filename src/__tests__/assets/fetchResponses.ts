export const pieChartResponse = {
    items: [
        { 'host_count': 4655, 'total_count': 578, 'id': 2, 'name': 'organization_0' },
        { 'host_count': 96225, 'total_count': 456, 'id': -2, 'name': '' },
        { 'host_count': 2995, 'total_count': 411, 'id': 4, 'name': 'organization_3' },
        { 'host_count': 2975, 'total_count': 410, 'id': 3, 'name': 'organization_1' },
        { 'host_count': 2975, 'total_count': 410, 'id': 1, 'name': 'organization_2' },
        { 'host_count': 70720, 'id': -1, 'name': '26 Others' }
    ]
};

export const stackedChartResponse = {
    'items': [
        {
            'failed_count': 24,
            'success_count': 19,
            'failed_anomaly': null,
            'created_date': '2020-10-31'
        },
        {
            'failed_count': 24,
            'success_count': 26,
            'failed_anomaly': null,
            'created_date': '2020-11-01'
        },
        {
            'failed_count': 32,
            'success_count': 45,
            'failed_anomaly': 32,
            'created_date': '2020-11-02'
        },
        {
            'failed_count': 24,
            'success_count': 19,
            'failed_anomaly': null,
            'created_date': '2020-11-03'
        },
        {
            'failed_count': 24,
            'success_count': 77,
            'failed_anomaly': null,
            'created_date': '2020-11-04'
        },
        {
            'failed_count': 24,
            'success_count': 0,
            'failed_anomaly': null,
            'created_date': '2020-11-05'
        }
    ]
};

export const groupedChartResponse = {
    response_type: 'jobs_by_date_and_org',
    dates: [
        {
            'date': '2021-04-11',
            'items': [
                { 'total_count': 10, 'total_org_count': 1, 'id': -2, 'name': '' },
                { 'total_count': 23, 'total_org_count': 1, 'id': 2, 'name': 'organization_0' },
                { 'total_count': 17, 'total_org_count': 1, 'id': 3, 'name': 'organization_1' }
            ]
        }, {
            'date': '2021-04-12',
            'items': [
                { 'total_count': 10, 'total_org_count': 1, 'id': -2, 'name': '' },
                { 'total_count': 23, 'total_org_count': 1, 'id': 2, 'name': 'organization_0' },
                { 'total_count': 17, 'total_org_count': 1, 'id': 3, 'name': 'organization_1' }
            ]
        }, {
            'date': '2021-04-13',
            'items': [
                { 'total_count': 11, 'total_org_count': 1, 'id': -2, 'name': '' },
                { 'total_count': 22, 'total_org_count': 1, 'id': 2, 'name': 'organization_0' },
                { 'total_count': 16, 'total_org_count': 1, 'id': 3, 'name': 'organization_1' },
            ]
        }
    ],
    meta: {}
};

export const stackedChartResponseWithY = {
    'items': [
        {
            'y': 15,
            'created_date': '2020-10-31'
        },
        {
            'y': 0,
            'created_date': '2020-11-01'
        },
        {
            'y': 25,
            'created_date': '2020-11-02'
        },
        {
            'y': 11,
            'created_date': '2020-11-03'
        },
        {
            'y': 18,
            'created_date': '2020-11-04'
        },
        {
            'y': 85,
            'created_date': '2020-11-05'
        }
    ]
};