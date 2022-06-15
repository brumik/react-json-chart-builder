import lineWithDots from './lineWithDots';
import complex from './complex';
import stackedBar from './stackedBar';
import stackedLine from './stackedLine';
import dynamicGrouped from './dynamicGrouped';
import pie from './pie';
import legendLikeTooltip from './legendLikeTooltip';
import { Preset, PresetName } from './types';
import dynamicScatter from './dynamicScatter';
import scatterWithCustomPoints from './scatterWithCustomPoints';

export default (slug: PresetName): Preset => {
  switch (slug) {
    case PresetName.PIE: return pie;
    case PresetName.STACKED_LINE: return stackedLine;
    case PresetName.STACKED_BAR: return stackedBar;
    case PresetName.LINE_WITH_DOTS: return lineWithDots;
    case PresetName.DYNAMIC_GROUPED: return dynamicGrouped;
    case PresetName.DYNAMIC_SCATTER: return dynamicScatter;
    case PresetName.LEGEND_LIKE_TOOLTIP: return legendLikeTooltip;
    case PresetName.COMPLEX: return complex;
    case PresetName.CUSTOM_POINTS: return scatterWithCustomPoints;
    default: throw new Error('Unknown preset.');
  }
};
