import { PresetName, Tag } from './types';
import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartSchemaElement,
  ChartThemeColor,
  ChartTopLevelType,
  ChartType
} from '../../../src';

const data = {
  'series': [
    {
      'serie': [
        {
          'created_date': '2021-04-28',
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-04-29',
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-04-30',
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-01',
          'total_count': 22,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-02',
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-03',
          'total_count': 23,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-04',
          'total_count': 14,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-05',
          'total_count': 12,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-06',
          'total_count': 12,
          'total_org_count': 1,
          'id': 2,
          'name': 'organization_0'
        },
        {
          'created_date': '2021-05-07',
          'total_count': 0,
          'total_org_count': 0,
          'id': 2,
          'name': 'organization_0'
        }
      ],
      'hidden': false,
      'name': '7967da16-df2b-4f81-960c-ddfb14eaf4a1'
    },
    {
      'serie': [
        {
          'created_date': '2021-04-28',
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-04-29',
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-04-30',
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-01',
          'total_count': 16,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-02',
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-03',
          'total_count': 17,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-04',
          'total_count': 14,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-05',
          'total_count': 12,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-06',
          'total_count': 12,
          'total_org_count': 1,
          'id': 3,
          'name': 'organization_1'
        },
        {
          'created_date': '2021-05-07',
          'total_count': 0,
          'total_org_count': 0,
          'id': 3,
          'name': 'organization_1'
        }
      ],
      'hidden': false,
      'name': '411fcf95-ad46-4343-8f48-37195e6f65e1'
    },
    {
      'serie': [
        {
          'created_date': '2021-04-28',
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-04-29',
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-04-30',
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-01',
          'total_count': 16,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-02',
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-03',
          'total_count': 17,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-04',
          'total_count': 14,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-05',
          'total_count': 12,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-06',
          'total_count': 12,
          'total_org_count': 1,
          'id': 4,
          'name': 'organization_3'
        },
        {
          'created_date': '2021-05-07',
          'total_count': 0,
          'total_org_count': 0,
          'id': 4,
          'name': 'organization_3'
        }
      ],
      'hidden': false,
      'name': 'dcb44762-682f-483a-be50-99b645360119'
    },
    {
      'serie': [
        {
          'created_date': '2021-04-28',
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-04-29',
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-04-30',
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-01',
          'total_count': 16,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-02',
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-03',
          'total_count': 17,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-04',
          'total_count': 14,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-05',
          'total_count': 12,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-06',
          'total_count': 12,
          'total_org_count': 1,
          'id': 1,
          'name': 'organization_2'
        },
        {
          'created_date': '2021-05-07',
          'total_count': 0,
          'total_org_count': 0,
          'id': 1,
          'name': 'organization_2'
        }
      ],
      'hidden': false,
      'name': '013892d3-2c09-4079-932b-b96aa1201e97'
    },
    {
      'serie': [
        {
          'created_date': '2021-04-28',
          'total_count': 122,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-04-29',
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-04-30',
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-05-01',
          'total_count': 127,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-05-02',
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-05-03',
          'total_count': 123,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-05-04',
          'total_count': 69,
          'total_org_count': 26,
          'id': -1,
          'name': '26 Others'
        },
        {
          'created_date': '2021-05-05',
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        },
        {
          'created_date': '2021-05-06',
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        },
        {
          'created_date': '2021-05-07',
          'total_count': 0,
          'total_org_count': 0,
          'id': -1,
          'name': '0 Others'
        }
      ],
      'hidden': false,
      'name': 'ac056e8b-ba02-4bb0-8770-3cfaefc22b67'
    }
  ],
  'legend': [
    {
      'total_count': 175,
      'total_org_count': 1,
      'id': 2,
      'name': 'organization_0',
      'childName': '7967da16-df2b-4f81-960c-ddfb14eaf4a1'
    },
    {
      'total_count': 139,
      'total_org_count': 1,
      'id': 3,
      'name': 'organization_1',
      'childName': '411fcf95-ad46-4343-8f48-37195e6f65e1'
    },
    {
      'total_count': 139,
      'total_org_count': 1,
      'id': 4,
      'name': 'organization_3',
      'childName': 'dcb44762-682f-483a-be50-99b645360119'
    },
    {
      'total_count': 139,
      'total_org_count': 1,
      'id': 1,
      'name': 'organization_2',
      'childName': '013892d3-2c09-4079-932b-b96aa1201e97'
    },
    {
      'total_count': 810,
      'total_org_count': 26,
      'id': -1,
      'name': '27 Others',
      'childName': 'ac056e8b-ba02-4bb0-8770-3cfaefc22b67'
    }
  ]
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

const description = 'The example shows how to use the template in the group \
  chart to render multiple bars from multiple series in the data set. \
  For bars the standalone tooltips are looking good, like in this example. \
  The legend is interactive. Click to toggle the connected bars in the chart.';

export default {
  slug: PresetName.COMPLEX,
  title: 'Grouped bar chart from template',
  description,
  tags: [
    Tag.dynamicTemplate,
    Tag.grouped,
    Tag.legend,
    Tag.standaloneTooltip
  ],
  schema,
  data
};
