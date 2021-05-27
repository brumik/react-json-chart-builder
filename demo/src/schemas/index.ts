import anomaly from './anomaly';
import groupedStacked from './groupedStacked';
import stackedBar from './stackedBar';
import stackedLine from './stackedLine';
import dynamicGrouped from './dynamicGrouped';
import pie from './pie';
import { ChartSchemaElement } from '../../../src';

export enum PresetNames {
    ANOMALY = 'anomaly',
    GROUPED_STACKED = 'groupedStacked',
    STACKED_BAR = 'stackedBar',
    STACKED_LINE = 'stackedLine',
    DYNAMIC_GROUPED = 'dynamicGrouped',
    PIE = 'pie'
}

export const humanReadableNames: Record<PresetNames, string> = {
    [PresetNames.ANOMALY]: 'Anomaly',
    [PresetNames.GROUPED_STACKED]: 'Stacked with line',
    [PresetNames.STACKED_BAR]: 'Stacked bar',
    [PresetNames.STACKED_LINE]: 'Stacked line',
    [PresetNames.DYNAMIC_GROUPED]: 'Grouped with dynamic no. bars',
    [PresetNames.PIE]: 'Pie'
}

export default {
    anomaly,
    groupedStacked,
    stackedBar,
    stackedLine,
    dynamicGrouped,
    pie
} as Record<PresetNames, ChartSchemaElement[]>;
