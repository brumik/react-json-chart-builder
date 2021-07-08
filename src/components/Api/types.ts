import { ChartLegendData } from '../types';

export enum ApiType {
    nonGrouped = 'nonGrouped',
    grouped = 'grouped'
}

export interface NonGroupedApi {
    type: ApiType.nonGrouped,
    items: Record<string, string | number>[]
    response_type: string,
    meta?: {
        legend?: ChartLegendData,
        [key: string]: any
    }
}

export interface GroupedApi {
    type: ApiType.grouped,
    dates: {
        date: string,
        items: Record<string, string | number>[]
    }[],
    response_type: string,
    meta?: {
        legend?: ChartLegendData,
        [key: string]: any
    }
}

export type ApiReturnType = NonGroupedApi | GroupedApi;