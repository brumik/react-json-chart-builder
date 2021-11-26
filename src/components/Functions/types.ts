import { SyntheticEvent } from 'react';
import { LabelFunction } from './labelFormat';

export { ChartLabelFormatFunctionNames } from './labelFormat';
export { ChartAxisFormatFunctionNames } from './axisFormat';

export type ChartOnClickFunction = (
    event: SyntheticEvent<any, Event>,
    props: Record<string, any>
) => any;
export type ChartAxisFormatFunction = (tick: string | number) => string;
export type ChartLabelFormatFunction = LabelFunction;

export interface ChartFunctions {
    onClick?: Record<string, ChartOnClickFunction>
    axisFormat?: Record<string, ChartAxisFormatFunction>
    labelFormat?: Record<string, ChartLabelFormatFunction>
}
