import { v4 as uuidv4 } from 'uuid';
import { ChartData, ChartDataSerie } from '../../src/components/types';
import { ApiReturnType, ApiType, GroupedApi } from './types';

export const convertGroupedByData = (data: GroupedApi): ChartDataSerie[] => {
  const { dates } = data;
  const items: ChartDataSerie[] = [];
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

export const convertApiToData = (
  result: ApiReturnType
): ChartData => {
  const resolvedData: ChartData = {
    series: [],
    legend: []
  };

  if ('dates' in result) {
    result.type = ApiType.grouped
  } else {
    result.type = ApiType.nonGrouped
  }

  switch (result.type) {
    case ApiType.grouped:
      resolvedData.series = convertGroupedByData(result);
      break;
    case ApiType.nonGrouped:
      resolvedData.series = [{
        serie: result.items,
        hidden: false,
        name: uuidv4()
      }];
      break;
  }

  if (result.meta?.legend) {
    resolvedData.legend = result.meta.legend.map((item) => {
      const s = resolvedData.series.find(({ serie }) => {
        return serie.find(({ id: serieId }) => serieId === item.id);
      });
      return {
        ...item,
        childName: s.name
      };
    });
  }

  return resolvedData;
};
