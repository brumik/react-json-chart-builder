import { PresetName, Tag } from './types';
import {
  ChartKind,
  ChartSchemaElement,
  ChartTopLevelType,
  ChartType
} from '../../../src';
import React, { FC } from 'react';

const data = {
  'series': [
    {
      'serie': [
        {
          'failed_count': 24,
          'failed_anomaly': 7,
          'created_date': '2020-11-04'
        },
        {
          'failed_count': 24,
          'failed_anomaly': 3,
          'created_date': '2020-11-05'
        },
        {
          'failed_count': 24,
          'failed_anomaly': 8,
          'created_date': '2020-11-06'
        },
        {
          'failed_count': 11,
          'failed_anomaly': 11,
          'created_date': '2020-11-07'
        },
        {
          'failed_count': 24,
          'failed_anomaly': 7,
          'created_date': '2020-11-08'
        },
        {
          'failed_count': 24,
          'failed_anomaly': 5,
          'created_date': '2020-11-09'
        },
        {
          'failed_count': 24,
          'failed_anomaly': 1,
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
    type: ChartType.scatter,
    parent: 2,
    props: {
      x: 'created_date',
      y: 'failed_anomaly',
      size: 7,
      style: {
        data: {
          fill: '#c43a31'
        }
      }
    },
    dataComponent: 'scatterPlot'
  }
];

interface Props {
  x?: number;
  y?: number;
  [key: string]: any;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CustomPoint: FC<Props> = ({ x, y, disableInlineStyles, ...props }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  // the component can be centered here if needed
  return <text x={x} y={y} {...props}>:-)</text>;
};

const functions = {
  dataComponent: {
    'scatterPlot': CustomPoint
  }
};

const description = 'The example of scatter chart with custom points shows how to replace \
    a default points with a custom component. It also shows how to handle color change from default.';

export default {
  slug: PresetName.CUSTOM_POINTS,
  title: 'Custom points',
  description,
  tags: [Tag.styled, Tag.customPoint],
  schema,
  data,
  functions
};
