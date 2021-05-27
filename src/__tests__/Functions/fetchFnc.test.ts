import fetchMock from 'fetch-mock-jest';
import fetchFnc from '../../components/Functions/fetchFnc';

describe('Chart/Functions/fetchFnc', () => {
    afterEach(() => fetchMock.restore());

    test('should fetch POST data from API with params', async () => {
        fetchMock.post('test', {});
        const api = {
            url: 'test',
            params: {
                test: '1'
            }
        };

        await fetchFnc(api);
        const resUrl = fetchMock.lastCall()[0];
        const resBody = fetchMock.lastCall()[1].body;
        const resMethod = fetchMock.lastCall()[1].method;

        expect(resUrl).toBe('/test');
        expect(JSON.parse(resBody as string)).toEqual({ test: '1' });
        expect(resMethod).toBe('POST');
    });

    test('should fetch GET data from API without params', async () => {
        fetchMock.get('test/GET', {});
        const api = {
            url: 'test/GET',
            params: {},
            method: 'GET'
        };

        await fetchFnc(api);
        const resUrl = fetchMock.lastCall()[0];
        const resMethod = fetchMock.lastCall()[1].method;

        expect(resUrl).toBe('/test/GET');
        expect(resMethod).toBe('GET');

    })
});