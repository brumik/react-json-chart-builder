import { ApiReturnType } from '../Api/';
import { ChartApiProps } from '../types';

const fetchFnc = (api: ChartApiProps): Promise<ApiReturnType> => fetch(api.url, {
    method: api.method ?? 'POST',
    ...(!api.method || api.method === 'POST') && { body: JSON.stringify(api.params) }
}).then(r => r.json()) as Promise<ApiReturnType>;

export default fetchFnc;