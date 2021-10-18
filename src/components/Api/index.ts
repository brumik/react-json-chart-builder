import { v4 as uuidv4 } from 'uuid';
import { ChartFetchFunction } from '../Functions/types';
import { ChartApiProps, ChartApiData, ChartLegendData, ChartData } from '../types';
import { ApiReturnType, ApiType, GroupedApi } from './types';
export * from './types';

export const convertGroupedByData = (data: GroupedApi): ChartData => {
    const { dates } = data;
    const items: ChartData = [];
    dates.forEach((el) => {
        // Add items to the correct serie
        el.items.forEach((item, idx) => {
            if (!items[idx]) {
                items[idx] = {
                    serie: [],
                    hidden: false,
                    name: uuidv4()
                };
            }
            items[idx].serie.push({
                created_date: el.date,
                ...item
            });
        })
    });
    return items;
}

export const getApiData = async (
    api: ChartApiProps,
    fetchApi: ChartFetchFunction
): Promise<ChartApiData> => {
    const resolvedData: ChartApiData = {
        data: [],
        legend: []
    };

    await fetchApi(api).then((result: ApiReturnType) => {
        // eslint-disable-next-line @typescript-eslint/dot-notation
        if (result['dates']) {
            result.type = ApiType.grouped
        } else {
            result.type = ApiType.nonGrouped
        }

        switch (result.type) {
            case ApiType.grouped:
                resolvedData.data = convertGroupedByData(result);
                break;
            case ApiType.nonGrouped:
                resolvedData.data = [{
                    serie: result.items,
                    hidden: false,
                    name: uuidv4()
                }];
                break;
        }

        if (result?.meta?.legend) {
            resolvedData.legend = result.meta.legend.map(({ id }) => {
                const s = resolvedData.data.find(({ serie }) => {
                    return serie.find(({ id: serieId }) => serieId === id);
                });
                return {
                    name: s.serie[0].name as string ?? '',
                    childName: s.name
                };
            });
        } else {
            resolvedData.legend = getLegendData(resolvedData);
        }
    });
    return resolvedData;
};

export const getLegendData = (resolvedApi: ChartApiData): ChartLegendData =>
    resolvedApi.data.length === 1
        ? resolvedApi.data[0].serie.map(item => ({
            name: (item.name || 'No Name') as string,
            childName: resolvedApi.data[0].name
        }))
        : resolvedApi.data.map(serie => ({
            name: (serie.serie[0].name || 'No Name') as string,
            childName: serie.name
        }));