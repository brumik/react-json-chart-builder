import { ChartLegendEntry } from '../../src/components/types';

export enum ApiType {
  nonGrouped = 'nonGrouped',
  grouped = 'grouped'
}

export interface NonGroupedApi {
  type?: ApiType.nonGrouped,
  items: Record<string, string | number>[]
  meta?: {
    legend?: ChartLegendEntry[],
    [key: string]: any
  }
}

export interface GroupedApi {
  type?: ApiType.grouped,
  dates: {
    date: string,
    items: Record<string, string | number>[]
  }[],
  meta?: {
    legend?: ChartLegendEntry[],
    [key: string]: any
  }
}

export type ApiReturnType = NonGroupedApi | GroupedApi;