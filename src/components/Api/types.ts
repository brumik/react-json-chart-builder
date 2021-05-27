export enum ApiType {
    nonGrouped = 'nonGrouped',
    grouped = 'grouped'
}

export interface NonGroupedApi {
    type: ApiType.nonGrouped,
    items: Record<string, string | number>[]
    response_type: string
}

export interface GroupedApi {
    type: ApiType.grouped,
    dates: {
        date: string,
        items: Record<string, string | number>[]
    }[],
    meta: any,
    response_type: string
}

export type ApiReturnType = NonGroupedApi | GroupedApi;