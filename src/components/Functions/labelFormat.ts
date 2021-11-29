import { ChartLabelFormatFunction } from './types';

export enum ChartLabelFormatFunctionNames {
    default = 'default',
    defaultStandalone = 'defaultStandalone',
}

const defaultStandalone: ChartLabelFormatFunction =
    ({ datum }: { datum: Record<string, string> }) =>
        datum.labelName
            ? `${datum.labelName}: ${datum.y}`
            : `${datum.y}`;

const defaultFnc: ChartLabelFormatFunction =
    ({ datum }: { datum: Record<string, string>; }) =>
        datum.ignored ? null : defaultStandalone({ datum })

export default {
    default: defaultFnc,
    defaultStandalone
};