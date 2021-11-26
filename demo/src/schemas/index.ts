import anomaly from './anomaly';
import groupedStacked from './groupedStacked';
import stackedBar from './stackedBar';
import stackedLine from './stackedLine';
import dynamicGrouped from './dynamicGrouped';
import pie from './pie';
import legendLikeTooltip from './legendLikeTooltip';
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

export type Preset = {
    [key in PresetName]: {
        schema: ChartSchemaElement[];
        data: ChartData;
    };
};

export const humanReadableNames: Record<PresetName, string> = {
    [PresetName.ANOMALY]: 'Anomaly',
    [PresetName.GROUPED_STACKED]: 'Stacked with line',
    [PresetName.STACKED_BAR]: 'Stacked bar',
    [PresetName.STACKED_LINE]: 'Stacked line',
    [PresetName.DYNAMIC_GROUPED]: 'Grouped with dynamic no. bars',
    [PresetName.PIE]: 'Pie',
    [PresetName.LEGEND_LIKE_TOOLTIP]: 'Legend like tooltip'
}

export default {
    [PresetName.ANOMALY]: anomaly,
    [PresetName.GROUPED_STACKED]: groupedStacked,
    [PresetName.STACKED_BAR]: stackedBar,
    [PresetName.STACKED_LINE]: stackedLine,
    [PresetName.DYNAMIC_GROUPED]: dynamicGrouped,
    [PresetName.PIE]: pie,
    [PresetName.LEGEND_LIKE_TOOLTIP]: legendLikeTooltip
} as Preset;
