import { PresetName, Tag } from './types';
import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartTopLevelType,
  ChartType,
  ChartThemeColor,
  ChartSchemaElement
} from '../../../src';

const data = {
  'series': [
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 100,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 53,
          'name': 'template_name_58',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': 'a2b47b7c-8b0d-471e-a087-034573b63cb6'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 200,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 100,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 180,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 43,
          'name': 'template_name_53',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': 'c6b60f8e-d0e6-433b-974c-5455d830cdf2'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 130,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 42,
          'name': 'template_name_56',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 100,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': '3c1593ec-5e93-48d9-aa1c-d00729f3db98'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 140,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 11,
          'name': 'template_name_54',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 20,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': 'ce10eb37-728b-45f0-b074-bf88a149a77a'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 260,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 200,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 340,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 260,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 160,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 35,
          'name': 'template_name_59',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 220,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': '1a94a9cb-8260-4233-af10-ffb5437e3ff1'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 360,
          'total_count': 160
        },
        {
          'created_date': '2021-06-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 360,
          'total_count': 160
        },
        {
          'created_date': '2021-07-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 28,
          'total_template_count': 1,
          'total_unique_host_count': 340,
          'total_count': 140
        },
        {
          'created_date': '2021-08-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 360,
          'total_count': 160
        },
        {
          'created_date': '2021-09-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 32,
          'total_template_count': 1,
          'total_unique_host_count': 360,
          'total_count': 160
        },
        {
          'created_date': '2021-10-01',
          'id': 56,
          'name': 'template_name_57',
          'total_unique_host_changed_count': 4,
          'total_template_count': 1,
          'total_unique_host_count': 220,
          'total_count': 20
        }
      ],
      'hidden': false,
      'name': '7046cdf8-36c3-4ee6-a9f1-d44d5268df8d'
    },
    {
      'serie': [
        {
          'created_date': '2021-05-01',
          'total_unique_host_changed_count': 468,
          'total_template_count': 54,
          'total_unique_host_count': 482,
          'total_count': 8433,
          'id': -1,
          'name': '54 Others'
        },
        {
          'created_date': '2021-06-01',
          'total_unique_host_changed_count': 462,
          'total_template_count': 54,
          'total_unique_host_count': 479,
          'total_count': 8430,
          'id': -1,
          'name': '54 Others'
        },
        {
          'created_date': '2021-07-01',
          'total_unique_host_changed_count': 477,
          'total_template_count': 54,
          'total_unique_host_count': 494,
          'total_count': 10413,
          'id': -1,
          'name': '54 Others'
        },
        {
          'created_date': '2021-08-01',
          'total_unique_host_changed_count': 470,
          'total_template_count': 54,
          'total_unique_host_count': 492,
          'total_count': 10293,
          'id': -1,
          'name': '54 Others'
        },
        {
          'created_date': '2021-09-01',
          'total_unique_host_changed_count': 462,
          'total_template_count': 54,
          'total_unique_host_count': 479,
          'total_count': 9930,
          'id': -1,
          'name': '54 Others'
        },
        {
          'created_date': '2021-10-01',
          'total_unique_host_changed_count': 58,
          'total_template_count': 49,
          'total_unique_host_count': 67,
          'total_count': 1118,
          'id': -1,
          'name': '49 Others'
        }
      ],
      'hidden': false,
      'name': '8b22cbde-a4cf-4562-812f-68c9be43d3b0'
    }
  ],
  'legend': [
    {
      'id': 53,
      'name': 'template_name_58',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': 'a2b47b7c-8b0d-471e-a087-034573b63cb6'
    },
    {
      'id': 43,
      'name': 'template_name_53',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': 'c6b60f8e-d0e6-433b-974c-5455d830cdf2'
    },
    {
      'id': 42,
      'name': 'template_name_56',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': '3c1593ec-5e93-48d9-aa1c-d00729f3db98'
    },
    {
      'id': 11,
      'name': 'template_name_54',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': 'ce10eb37-728b-45f0-b074-bf88a149a77a'
    },
    {
      'id': 35,
      'name': 'template_name_59',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': '1a94a9cb-8260-4233-af10-ffb5437e3ff1'
    },
    {
      'id': 56,
      'name': 'template_name_57',
      'total_unique_host_changed_count': 160,
      'total_template_count': 1,
      'total_unique_host_count': 800,
      'total_count': 800,
      'childName': '7046cdf8-36c3-4ee6-a9f1-d44d5268df8d'
    },
    {
      'total_unique_host_changed_count': 2000,
      'total_template_count': 54,
      'total_unique_host_count': 2000,
      'total_count': 48617,
      'id': -1,
      'name': '54 Others',
      'childName': '8b22cbde-a4cf-4562-812f-68c9be43d3b0'
    }
  ]
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
      truncateAt: 13,
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

const description = 'The chart demonstrates two features: custom tooltip which \
  coresponsds with the legend and the power of rendering variable amounth of lines \
  from the data set. Each line is correpsonding to as "serie" in the data set. \
  Clicking on the legend toggles the connected chart\'s visibility.'

export default {
  slug: PresetName.LEGEND_LIKE_TOOLTIP,
  title: 'Legend like tooltip',
  description,
  tags: [
    Tag.legend,
    Tag.legendWrap,
    Tag.tooltip,
    Tag.grouped,
    Tag.dynamicTemplate
  ],
  schema,
  data
};
