import { ChartData, ChartSchemaElement } from '../../../src';

export enum PresetName {
  ANOMALY = 'anomaly',
  GROUPED_STACKED = 'groupedStacked',
  STACKED_BAR = 'stackedBar',
  STACKED_LINE = 'stackedLine',
  DYNAMIC_GROUPED = 'dynamicGrouped',
  PIE = 'pie',
  LEGEND_LIKE_TOOLTIP = 'legendLikeTooltip',
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
  test1 = 'Test 1',
  test2 = 'Test 2',
}
