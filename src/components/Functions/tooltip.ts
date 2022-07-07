import { ChartTooltip } from '@patternfly/react-charts';
import { ChartTooltipComponentFunction } from './types';

export enum ChartTooltipComponentFunctionNames {
  default = 'default'
}

const tooltip: Record<string, ChartTooltipComponentFunction> = {
  [ChartTooltipComponentFunctionNames.default]: ChartTooltip
}

export default tooltip;
