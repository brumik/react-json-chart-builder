import {
    ApiType,
    GroupedApi,
    convertGroupedByData,
    //getApiData,
    getLegendData
} from '../../components/Api';

describe('Chart/Api', () => {
    test('should convert grouped api data correctly to chart data', () => {
        const groupedApiData = {
            type: ApiType.grouped,
            response_type: 'test',
            dates: [
                { date: '01', items: [{ id: 1 }, { id: 2 }] },
                { date: '02', items: [{ id: 1 }, { id: 2 }] },
                { date: '03', items: [{ id: 1 }, { id: 2 }] },
                { date: '04', items: [{ id: 1 }, { id: 2 }] }
            ],
            meta: {}
        } as GroupedApi;

        const resultingChartData = [{ "hidden": false, "serie": [{ "created_date": "01", "id": 1 }, { "created_date": "02", "id": 1 }, { "created_date": "03", "id": 1 }, { "created_date": "04", "id": 1 }] }, { "hidden": false, "serie": [{ "created_date": "01", "id": 2 }, { "created_date": "02", "id": 2 }, { "created_date": "03", "id": 2 }, { "created_date": "04", "id": 2 }] }];

        // Filter out the name as it is generated uniquely
        const result = convertGroupedByData(groupedApiData).map((el) => ({
            hidden: el.hidden,
            serie: el.serie,
        }))

        expect(result).toEqual(resultingChartData);
    });

    test('should get legend data correctly from chart data', () => {
        const groupedChartData = {
            data: [{
                serie: [
                    { id: 1, name: '01' },
                    { id: 2, name: '01' },
                ],
                hidden: false,
                name: '11'
            },
            {
                serie: [
                    { id: 1, name: '' },
                    { id: 2, name: '02' },
                ],
                hidden: false,
                name: '12'
            }]
        };
        const legend = [{ name: '01' }, { name: 'No Name'}];

        let result = getLegendData(groupedChartData).map(({ name }) => ({ name }));
        expect(result).toEqual(legend);

        const singleChartData = {
            data: [{
                serie: [
                    { id: 1, name: '01' },
                    { id: 2, name: '' }
                ],
                hidden: false,
                name: '12'
            }]
        };
        
        result = getLegendData(singleChartData).map(({ name }) => ({ name }));
        expect(result).toEqual(legend);
    });

    xtest('should fetch correctly non grouped data', () => { })
    xtest('should fetch correctly grouped data', () => { })
});