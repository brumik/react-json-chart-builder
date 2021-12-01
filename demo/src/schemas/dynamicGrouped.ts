import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartSchemaElement,
  ChartThemeColor,
  ChartTopLevelType,
  ChartType
} from '../../../src';
import { convertApiToData } from '../../apiPreprocess';

const api = {
  'dates': [
    {
      'date': '2021-04-28',
      'items': [
        {
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 122,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-04-29',
      'items': [
        {
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-04-30',
      'items': [
        {
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-05-01',
      'items': [
        {
          'total_count': 22,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 16,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 16,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 16,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 127,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-05-02',
      'items': [
        {
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-05-03',
      'items': [
        {
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-05-04',
      'items': [
        {
          'total_count': 14,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 14,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 14,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 14,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 69,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        }
      ]
    },
    {
      'date': '2021-05-05',
      'items': [
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        }
      ]
    },
    {
      'date': '2021-05-06',
      'items': [
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 12,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        }
      ]
    },
    {
      'date': '2021-05-07',
      'items': [
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        }
      ]
    }
  ],
  'meta': {
    'count': 31,
    'counts': {
      '2021-04-28': {
        'total_count': 207,
        'total_org_count': 31
      },
      '2021-04-29': {
        'total_count': 208,
        'total_org_count': 31
      },
      '2021-04-30': {
        'total_count': 208,
        'total_org_count': 31
      },
      '2021-05-01': {
        'total_count': 208,
        'total_org_count': 31
      },
      '2021-05-02': {
        'total_count': 208,
        'total_org_count': 31
      },
      '2021-05-03': {
        'total_count': 208,
        'total_org_count': 31
      },
      '2021-05-04': {
        'total_count': 200,
        'total_org_count': 31
      },
      '2021-05-05': {
        'total_count': 191,
        'total_org_count': 5
      },
      '2021-05-06': {
        'total_count': 57,
        'total_org_count': 5
      },
      '2021-05-07': {
        'total_count': 0,
        'total_org_count': 0
      },
      '2021-05-08': {
        'total_count': 0,
        'total_org_count': 0
      },
      '2021-05-09': {
        'total_count': 0,
        'total_org_count': 0
      },
      '2021-05-10': {
        'total_count': 0,
        'total_org_count': 0
      },
      '2021-05-11': {
        'total_count': 0,
        'total_org_count': 0
      }
    },
    'legend': [
      {
        'total_count': 175,
        'total_org_count': 1,
        'id': 2,
        'name': 'organization_0'
      },
      {
        'total_count': 139,
        'total_org_count': 1,
        'id': 3,
        'name': 'organization_1'
      },
      {
        'total_count': 139,
        'total_org_count': 1,
        'id': 4,
        'name': 'organization_3'
      },
      {
        'total_count': 139,
        'total_org_count': 1,
        'id': 1,
        'name': 'organization_2'
      },
      {
        'total_count': 810,
        'total_org_count': 26,
        'id': -1,
        'name': '27 Others'
      }
    ]
  }
};

const schema: ChartSchemaElement[] = [
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

export default {
  schema,
  data: convertApiToData(api)
}