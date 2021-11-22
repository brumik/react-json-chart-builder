import { ChartOnClickFunction } from './types';

const consoleLogValue: ChartOnClickFunction = (e, params) => {
    // eslint-disable-next-line no-console
    console.log('onclick', e, params);
};

const onClick: Record<string, ChartOnClickFunction> = {
    consoleLog: consoleLogValue
};

export default onClick;