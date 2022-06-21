import { ChartData, ChartSchemaElement } from '../../../src';

export enum PresetName {
  LINE_WITH_DOTS = 'line-with-dots',
  STACKED_BAR = 'stackedBar',
  STACKED_LINE = 'stackedLine',
  DYNAMIC_GROUPED = 'dynamicGrouped',
  PIE = 'pie',
  LEGEND_LIKE_TOOLTIP = 'legendLikeTooltip',
  COMPLEX = 'complex',
}

export interface Preset {
  slug: PresetName;
  title: string;
  description: string;
  tags: Tag[];
  schema: ChartSchemaElement[];
  data: ChartData;
}

export enum Tag {
  multichart = 'Multichart',
  stacked = 'Stacked',
  grouped = 'Grouped',
  styled = 'Styled',
  pie = 'Pie',
  legend = 'Legend',
  axis = 'Axis',
  tooltip = 'Tooltip',
}
