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
          organization: 'org_1',
          template: 'template_1',
          score: 1
        },
        {
          organization: 'org_1',
          template: 'template_2',
          score: 2
        },
        {
          organization: 'org_2',
          template: 'template_3',
          score: 3
        },
        {
          organization: 'org_2',
          template: 'template_4',
          score: 4
        },
        {
          organization: 'org_2',
          template: 'template_4',
          score: 5
        },
        {
          organization: 'org_3',
          template: 'template_1',
          score: 6
        },
        {
          organization: 'org_3',
          template: 'template_4',
          score: 1
        },
        {
          organization: 'org_4',
          template: 'template_2',
          score: 7
        }
      ],
      hidden: false,
      name: '7967da16-df2b-4f81-960c-ddfb14eaf4a1'
    }
  ]
};

const functions = {
  labelFormat: {
    customValues: ({ datum: { organization, template, score} }: {
      datum: {
        organization: string;
        template: string;
        score: number;
      }
    }): string =>
      `Organization: ${organization}\nTemplate: ${template}\nScore: ${score}`
  },
  style: {
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unsafe-member-access
    colorFiller: ({ datum }) => datum.score > 3 ? '#000000' : '#c43a31'
  }
};

const schema: ChartSchemaElement[] = [
  {
    id: 3000,
    kind: ChartKind.wrapper,
    type: ChartTopLevelType.chart,
    parent: null,
    props: {
      padding: {
        bottom: 40,
        left: 100
      }
    },
    xAxis: {
      style: {
        // Disable the ticks by setting 0 font.
        tickLabels: { fontSize: 0 },
        grid: { stroke: '#D2D2D2' }
      }
    },
    yAxis: {
      style: {
        grid: { stroke: '#D2D2D2' }
      }
    }
  },
  {
    id: 3101,
    kind: ChartKind.simple,
    type: ChartType.scatter,
    parent: 3000,
    tooltip: {
      labelFormat: 'customValues',
      standalone: true
    },
    props: {
      x: 'organization',
      y: 'template',
      size: 8,
      style: {
        data: {
          fill: 'colorFiller'
        }
      },
      symbol: 'square'
    }
  }
];

const description = 'The example of the scatter chart shows how to create a heatmap/grid styled\
  scatter chart. Main features are the hidden ticks on the x axis, the format of the data to render\
  a grid and the custom function passed and used in the tooltip labels.';

export default {
  slug: PresetName.DYNAMIC_SCATTER,
  title: 'Grid like scatter chart',
  description,
  tags: [
    Tag.axis,
    Tag.styled,
    Tag.standaloneTooltip,
    Tag.tooltip
  ],
  schema,
  data,
  functions
};
