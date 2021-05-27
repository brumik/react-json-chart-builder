import { ChartTooltipType } from '../types';
import { ChartTooltip as DefaultTooltip } from '@patternfly/react-charts';

type TooltipType = typeof DefaultTooltip;

const mapper: Partial<Record<ChartTooltipType, TooltipType>> = {
    [ChartTooltipType.default]: DefaultTooltip
};

export default mapper