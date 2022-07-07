import { ChartOnClickFunction } from './types';

export enum ChartOnClickFunctionNames {
  consoleLog = 'consoleLog'
}

const consoleLogValue: ChartOnClickFunction = (e, params) => {
  // eslint-disable-next-line no-console
  console.log('onclick', e, params);
};

const onClick: Record<string, ChartOnClickFunction> = {
  [ChartOnClickFunctionNames.consoleLog]: consoleLogValue
};

export default onClick;
