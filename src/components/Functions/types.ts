import { SyntheticEvent } from 'react';
import { ApiReturnType } from '../Api/types';
import { ChartApiProps } from '../types';
import { LabelFunction } from './labelFormat';

export { ChartLabelFormatFunctionNames } from './labelFormat';

export type ChartOnClickFunction = (
    event: SyntheticEvent<any, Event>,
    props: Record<string, any>
) => any;
export type ChartAxisFormatFunction = (tick: string | number) => string;
export type ChartLabelFormatFunction = LabelFunction;
export type ChartFetchFunction = (api: ChartApiProps) => Promise<ApiReturnType>;

export interface ChartFunctions {
    onClick?: Record<string, ChartOnClickFunction>
    axisFormat?: Record<string, ChartAxisFormatFunction>
    labelFormat?: Record<string, ChartLabelFormatFunction>
    fetchFnc: ChartFetchFunction
}
