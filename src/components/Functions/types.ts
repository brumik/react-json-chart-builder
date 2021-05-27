import { SyntheticEvent } from 'react';
import { ApiReturnType } from '../Api/types';
import { ChartApiProps } from '../types';

export type ChartOnClickFunction = (event: SyntheticEvent<any, Event>, props: Record<string, any>) => any;
export type ChartAxisFormatFunction = (tick: string | number) => string;
export type ChartFetchFunction = (api: ChartApiProps) => Promise<ApiReturnType>;

export interface ChartFunctions {
    onClick?: Record<string, ChartOnClickFunction>
    axisFormat?: Record<string, ChartAxisFormatFunction>
    fetchFnc: ChartFetchFunction
}
