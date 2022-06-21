import { PresetName, Tag } from './types';
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
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-10-31'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-01'
        },
        {
          'failed_count': 32,
          'failed_anomaly': 32,
          'created_date': '2020-11-02'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-03'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-04'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-05'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-06'
        },
        {
          'failed_count': 11,
          'failed_anomaly': 11,
          'created_date': '2020-11-07'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-08'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-09'
        },
        {
          'failed_count': 24,
          'failed_anomaly': null,
          'created_date': '2020-11-10'
        }
      ],
      'hidden': false,
      'name': '83386767-e37a-4186-8436-22a85a270596'
    }
  ],
  'legend': []
}

const schema: ChartSchemaElement[] = [
  {
    id: 1,
    kind: ChartKind.wrapper,
    type: ChartTopLevelType.chart,
    parent: null,
    xAxis: {
      label: 'Date',
      tickFormat: 'formatDateAsDayMonth'
    },
    yAxis: {
      label: 'Total jobs'
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
      y: 'failed_count'
    }
  },
  {
    id: 4,
    kind: ChartKind.simple,
    type: ChartType.scatter,
    parent: 2,
    props: {
      x: 'created_date',
      y: 'failed_anomaly',
      size: 7,
      style: {
        data: { fill: '#c43a31' }
      }
    }
  }
];

const description = 'The chart is perfect for displaying anomalies in the data set.\
  It uses two simple charts to create two charts on top of each other.';

export default {
  slug: PresetName.LINE_WITH_DOTS,
  title: 'Line chart with dots',
  description,
  tags: [Tag.multichart, Tag.grouped, Tag.styled],
  schema,
  data
};
