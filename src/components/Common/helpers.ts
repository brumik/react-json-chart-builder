import {
    ChartData,
    ChartTooltipCustomFunction,
    PaddingProps,
    PaddingPropsOptional
} from '../types';

type GetLabelReturnType = (d: any) => string;

export const snakeToSentence = (str: string): string => {
    const sentence = str.toLowerCase().split('_');
    sentence[0] = sentence[0][0].toUpperCase() + sentence[0].slice(1);
    return sentence.join(' ');
}

export const getLabels = (
    fnc = null as ChartTooltipCustomFunction,
    standalone = false
): GetLabelReturnType => {
    if (fnc) {
        return ({ datum }: { datum: Record<string, string> }) => fnc(datum);
    } else {
        return ({ datum }: { datum: Record<string, string> }) => {
            if (!standalone && datum.ignored) {
                return null;
            } else {
                return datum.labelName
                    ? `${datum.labelName}: ${datum.y}`
                    : `${datum.y}`;
            }
        };
    }
}

export const getBarWidthFromData = (data: ChartData): number => {
    const calculated = Math.floor(50 / data.length);
    const min = 1;
    const max = 20;
    return Math.max(min, Math.min(max, calculated));
}

export const paddingNumberToObject = (padding: PaddingPropsOptional | number): PaddingProps => (isNaN(+padding))
    ? padding as PaddingProps
    : {
        top: padding as number,
        bottom: padding as number,
        left: padding as number,
        right: padding as number
    };