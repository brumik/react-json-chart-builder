import { ChartOnClickFunction } from './types';

const consoleLogValue = (e: Record<string, any>, params: Record<string, any>): void => {
    // eslint-disable-next-line no-console
    console.log('onclick', e, params);
};

const onClick: Record<string, ChartOnClickFunction> = {
    consoleLog: consoleLogValue
};

export default onClick;