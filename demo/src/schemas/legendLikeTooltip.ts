import { PresetName } from './types';
import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartTopLevelType,
  ChartType,
  ChartThemeColor,
  ChartSchemaElement
} from '../../../src';
import { convertApiToData } from '../../apiPreprocess';

const api = {
  'meta': {
    'count': 60,
    'counts': {
      '2021-05-01': {
        'total_unique_host_count': 484,
        'total_unique_host_changed_count': 475,
        'total_template_count': 60,
        'total_count': 9393
      },
      '2021-06-01': {
        'total_unique_host_count': 479,
        'total_unique_host_changed_count': 463,
        'total_template_count': 60,
        'total_count': 9390
      },
      '2021-07-01': {
        'total_unique_host_count': 494,
        'total_unique_host_changed_count': 477,
        'total_template_count': 60,
        'total_count': 11253
      },
      '2021-08-01': {
        'total_unique_host_count': 494,
        'total_unique_host_changed_count': 477,
        'total_template_count': 60,
        'total_count': 11253
      },
      '2021-09-01': {
        'total_unique_host_count': 479,
        'total_unique_host_changed_count': 463,
        'total_template_count': 60,
        'total_count': 10890
      },
      '2021-10-01': {
        'total_unique_host_count': 71,
        'total_unique_host_changed_count': 62,
        'total_template_count': 55,
        'total_count': 1238
      }
    },
    'legend': [
      {
        'id': 53,
        'name': 'template_name_58',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'id': 43,
        'name': 'template_name_53',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'id': 42,
        'name': 'template_name_56',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'id': 11,
        'name': 'template_name_54',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'id': 35,
        'name': 'template_name_59',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'id': 56,
        'name': 'template_name_57',
        'total_unique_host_changed_count': 160,
        'total_template_count': 1,
        'total_unique_host_count': 800,
        'total_count': 800
      },
      {
        'total_unique_host_changed_count': 2000,
        'total_template_count': 54,
        'total_unique_host_count': 2000,
        'total_count': 48617,
        'id': -1,
        'name': '54 Others'
      }
    ]
  },
  'dates': [
    {
      'date': '2021-05-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'total_unique_host_changed_count': 468,
          'total_template_count': 54,
          'total_unique_host_count': 482,
          'total_count': 8433,
          'id': -1,
          'name': '54 Others'
        }
      ]
    },
    {
      'date': '2021-06-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'total_unique_host_changed_count': 462,
          'total_template_count': 54,
          'total_unique_host_count': 479,
          'total_count': 8430,
          'id': -1,
          'name': '54 Others'
        }
      ]
    },
    {
      'date': '2021-07-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'total_unique_host_changed_count': 477,
          'total_template_count': 54,
          'total_unique_host_count': 494,
          'total_count': 10413,
          'id': -1,
          'name': '54 Others'
        }
      ]
    },
    {
      'date': '2021-08-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'total_unique_host_changed_count': 470,
          'total_template_count': 54,
          'total_unique_host_count': 492,
          'total_count': 10293,
          'id': -1,
          'name': '54 Others'
        }
      ]
    },
    {
      'date': '2021-09-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'total_unique_host_changed_count': 462,
          'total_template_count': 54,
          'total_unique_host_count': 479,
          'total_count': 9930,
          'id': -1,
          'name': '54 Others'
        }
      ]
    },
    {
      'date': '2021-10-01',
      'items': [
        {
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        },
        {
          'total_unique_host_changed_count': 58,
          'total_template_count': 49,
          'total_unique_host_count': 67,
          'total_count': 1118,
          'id': -1,
          'name': '49 Others'
        }
      ]
    }
  ],
  'links': {
    'first': '/api/tower-analytics/v1/host_explorer/?limit=6&offset=0&sort_by=total_unique_host_count%3Adesc',
    'last': '/api/tower-analytics/v1/host_explorer/?limit=6&offset=54&sort_by=total_unique_host_count%3Adesc',
    'next': '/api/tower-analytics/v1/host_explorer/?limit=6&offset=6&sort_by=total_unique_host_count%3Adesc',
    'prev': null
  }
}

const schema: ChartSchemaElement[] = [
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
    template: 3
  },
  {
    id: 3,
    kind: ChartKind.simple,
    type: ChartType.line,
    parent: 0,
    props: {
      x: 'created_date',
      y: 'total_unique_host_count'
    },
    tooltip: {
      labelName: ''
    }
  }
];

export default {
  slug: PresetName.LEGEND_LIKE_TOOLTIP,
  title: 'Legend like tooltip',
  description: 'TODO',
  tags: [],
  schema,
  data: convertApiToData(api)
}
