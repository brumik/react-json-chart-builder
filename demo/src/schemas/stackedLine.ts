import { PresetName } from './types';
import {
  ChartKind,
  ChartSchemaElement,
  ChartTopLevelType,
  ChartType
} from '../../../src';

const data = {
  'series': [
    {
      'serie': [
        {
          'successful_count': 57,
          'failed_count': 24,
          'created_date': '2021-04-12'
        },
        {
          'successful_count': 41,
          'failed_count': 44,
          'created_date': '2021-04-13'
        },
        {
          'successful_count': 42,
          'failed_count': 24,
          'created_date': '2021-04-14'
        },
        {
          'successful_count': 56,
          'failed_count': 44,
          'created_date': '2021-04-15'
        },
        {
          'successful_count': 34,
          'failed_count': 24,
          'created_date': '2021-04-16'
        },
        {
          'successful_count': 64,
          'failed_count': 31,
          'created_date': '2021-04-17'
        },
        {
          'successful_count': 34,
          'failed_count': 37,
          'created_date': '2021-04-18'
        },
        {
          'successful_count': 57,
          'failed_count': 24,
          'created_date': '2021-04-19'
        },
        {
          'successful_count': 41,
          'failed_count': 44,
          'created_date': '2021-04-20'
        },
        {
          'successful_count': 42,
          'failed_count': 24,
          'created_date': '2021-04-21'
        },
        {
          'successful_count': 56,
          'failed_count': 44,
          'created_date': '2021-04-22'
        },
        {
          'successful_count': 34,
          'failed_count': 24,
          'created_date': '2021-04-23'
        },
        {
          'successful_count': 64,
          'failed_count': 31,
          'created_date': '2021-04-24'
        },
        {
          'successful_count': 34,
          'failed_count': 37,
          'created_date': '2021-04-25'
        },
        {
          'successful_count': 57,
          'failed_count': 24,
          'created_date': '2021-04-26'
        },
        {
          'successful_count': 41,
          'failed_count': 44,
          'created_date': '2021-04-27'
        },
        {
          'successful_count': 42,
          'failed_count': 24,
          'created_date': '2021-04-28'
        },
        {
          'successful_count': 56,
          'failed_count': 44,
          'created_date': '2021-04-29'
        },
        {
          'successful_count': 34,
          'failed_count': 24,
          'created_date': '2021-04-30'
        },
        {
          'successful_count': 64,
          'failed_count': 31,
          'created_date': '2021-05-01'
        },
        {
          'successful_count': 34,
          'failed_count': 37,
          'created_date': '2021-05-02'
        },
        {
          'successful_count': 57,
          'failed_count': 24,
          'created_date': '2021-05-03'
        },
        {
          'successful_count': 37,
          'failed_count': 40,
          'created_date': '2021-05-04'
        },
        {
          'successful_count': 30,
          'failed_count': 20,
          'created_date': '2021-05-05'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-06'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-07'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-08'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-09'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-10'
        },
        {
          'successful_count': 0,
          'failed_count': 0,
          'created_date': '2021-05-11'
        }
      ],
      'hidden': false,
      'name': 'b62550e6-61a0-4700-807a-b2b6486b7ae0'
    }
  ],
  'legend': []
};

const schema: ChartSchemaElement[] = [
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
      cursor: true,
      stickToAxis: 'x',
      mouseFollow: true
    }
  },
  {
    id: 2,
    kind: ChartKind.group,
    parent: 1
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
    },
    tooltip: {}
  }
];

export default {
  slug: PresetName.STACKED_LINE,
  title: 'Stacked line',
  description: 'TODO',
  tags: [],
  schema,
  data
};
