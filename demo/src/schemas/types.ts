import { ChartData, ChartSchemaElement } from '../../../src';

export enum PresetName {
  PIE = 'pie',
  STACKED_LINE = 'stacked-line-chart',
  STACKED_BAR = 'stacked-bar-chart',
  LINE_WITH_DOTS = 'line-with-dots',
  DYNAMIC_GROUPED = 'dynamic-grouped',
  DYNAMIC_SCATTER = 'dynamic-scatter',
  LEGEND_LIKE_TOOLTIP = 'legend-like-tooltip',
  COMPLEX = 'complex-chart',
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
  legendWrap = 'Wrapped legend',
  axis = 'Axis',
  tooltip = 'Tooltip',
  standaloneTooltip = 'Standalone Tooltip',
  onClick = 'On click',
  dynamicTemplate = 'Dynamic from template'
}
