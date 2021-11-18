export type LabelFunction = (data: { datum: Record<string, any> }) => string;

export enum ChartLabelFormatFunctionNames {
    default = 'default',
    defaultStandalone = 'defaultStandalone',
}

const defaultStandalone: LabelFunction =
    ({ datum }: { datum: Record<string, string> }) =>
        datum.labelName
            ? `${datum.labelName}: ${datum.y}`
            : `${datum.y}`;

const defaultFnc: LabelFunction =
    ({ datum }: { datum: Record<string, string>; }) =>
        datum.ignored ? null : defaultStandalone({ datum })

export default {
    default: defaultFnc,
    defaultStandalone
};