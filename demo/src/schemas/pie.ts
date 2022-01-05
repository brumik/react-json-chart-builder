import { PresetName } from './types';
import {
  ChartKind,
  ChartLegendOrientation,
  ChartLegendPosition,
  ChartSchemaElement,
  ChartTopLevelType
} from '../../../src';
import { convertApiToData } from '../../apiPreprocess';

const api = {
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
    'legend': [
      { name: 'organization_0', id: 2 },
      { name: 'No organization', id: -2 },
      { name: 'organization_1', id: 3 },
      { name: 'organization_3', id: 4 },
      { name: 'organization_2', id: 1 },
      { name: '26 Others', id: -1 }
    ]
  }
}

const schema: ChartSchemaElement[] = [
  {
    id: 1,
    kind: ChartKind.wrapper,
    type: ChartTopLevelType.pie,
    parent: null,
    props: {
      y: 'host_count'
    },
    legend: {
      interactive: true,
      orientation: ChartLegendOrientation.vertical,
      position: ChartLegendPosition.right
    }
  }
];

export default {
  slug: PresetName.PIE,
  title: 'Pie',
  description: 'TODO',
  tags: [],
  schema,
  data: convertApiToData(api)
}