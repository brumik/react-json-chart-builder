import { PresetName, Tag } from './types';
import {
  ChartKind,
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
          'year': 'initial',
          'total_hours_spent_risk_adjusted': 126,
          'total_hours_saved': 0,
          'cumulative_time_net_benefits': -126,
          'total_costs': -250349,
          'total_benefits': 534234,
          'cumulative_net_benefits': 283885
        },
        {
          'year': 'year1',
          'total_hours_spent_risk_adjusted': 126,
          'total_hours_saved': 1140,
          'cumulative_time_net_benefits': 888,
          'total_costs': -1000010,
          'total_benefits': 2140010,
          'cumulative_net_benefits': 1423885
        },
        {
          'year': 'year2',
          'total_hours_spent_risk_adjusted': 6,
          'total_hours_saved': 1311,
          'cumulative_time_net_benefits': 2193,
          'total_costs': -749383,
          'total_benefits': 13420,
          'cumulative_net_benefits': 687922
        },
        {
          'year': 'year3333333 55555555555 444444444444 666666666666 ',
          'total_hours_spent_risk_adjusted': 6,
          'total_hours_saved': 1508,
          'cumulative_time_net_benefits': 3695,
          'total_costs': -430284,
          'total_benefits': 1405,
          'cumulative_net_benefits': 259043
        }
      ],
      'hidden': false,
      'name': '838be6ab-bc78-40f6-a92e-08b31878e2cf'
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
      height: 600,
      domainPadding: {
        x: 100
      },
      themeColor: ChartThemeColor.gray
    },
    xAxis: {
      label: 'Time',
      labelProps: {
        angle: -45
      },
      turncateAt: 6
    },
    yAxis: {
      label: 'Money Saved',
      tickFormat: 'formatNumberAsK',
      labelProps: {
        angle: -90,
        textAnchor: 'middle'
      },
      style: {
        grid: { stroke: '#D2D2D2' }
      }
    },
    tooltip: {
      cursor: true,
      stickToAxis: 'x',
      mouseFollow: true,
      legendTooltip: {
        legendData: [
          {
            childName: 'total_costs',
            name: 'Total costs',
            symbol: {
              fill: '#8B8D8F'
            }
          },
          {
            childName: 'total_benefits',
            name: 'Total benefits',
            symbol: {
              fill: '#81C46B'
            }
          },
          {
            childName: 'cumulative',
            name: 'Cumulative benefits',
            symbol: {
              fill: '#EE7A00'
            }
          }
        ],
        titleProperyForLegend: 'year'
      }
    }
  },
  {
    id: 2,
    kind: ChartKind.stack,
    parent: 1
  },
  {
    id: 3,
    kind: ChartKind.simple,
    type: ChartType.bar,
    parent: 2,
    name: 'total_costs',
    props: {
      x: 'year',
      y: 'total_costs',
      barRatio: 0.8,
      barWidth: 0,
      style: {
        data: {
          fill: '#8B8D8F',
          width: 120
        }
      }
    },
    tooltip: {
      labelName: ''
    }
  },
  {
    id: 4,
    kind: ChartKind.simple,
    type: ChartType.bar,
    parent: 2,
    name: 'total_benefits',
    props: {
      x: 'year',
      y: 'total_benefits',
      barRatio: 0.8,
      barWidth: 0,
      style: {
        data: {
          fill: '#81C46B',
          width: 120
        }
      }
    },
    tooltip: {
      labelName: ''
    }
  },
  {
    id: 5,
    kind: ChartKind.simple,
    type: ChartType.line,
    parent: 1,
    name: 'cumulative',
    props: {
      x: 'year',
      y: 'cumulative_net_benefits',
      style: {
        data: {
          stroke: '#EE7A00',
          strokeWidth: 5
        }
      }
    },
    tooltip: {
      labelName: ''
    }
  }
];

const description = 'This complex example demonstrates the use of \
  the stack chart type, with higly customized elements, as well as \
  a customized legend like tooltip.';

export default {
  slug: PresetName.COMPLEX,
  title: 'Complex example',
  description,
  tags: [Tag.multichart, Tag.stacked, Tag.legend, Tag.axis, Tag.styled, Tag.tooltip],
  schema,
  data
};
