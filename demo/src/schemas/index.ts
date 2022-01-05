import anomaly from './anomaly';
import groupedStacked from './groupedStacked';
import stackedBar from './stackedBar';
import stackedLine from './stackedLine';
import dynamicGrouped from './dynamicGrouped';
import pie from './pie';
import legendLikeTooltip from './legendLikeTooltip';
import { Preset, PresetName } from './types';

export default (slug: PresetName): Preset => {
  switch (slug) {
    case PresetName.ANOMALY: return anomaly;
    case PresetName.GROUPED_STACKED: return groupedStacked;
    case PresetName.STACKED_BAR: return stackedBar;
    case PresetName.STACKED_LINE: return stackedLine;
    case PresetName.DYNAMIC_GROUPED: return dynamicGrouped;
    case PresetName.PIE: return pie;
    case PresetName.LEGEND_LIKE_TOOLTIP: return legendLikeTooltip;
    default: throw new Error('Unknown preset.');
  }
};
