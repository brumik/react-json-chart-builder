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

export const turncateAt = (str: string, length: number): string =>
    str.length > length ? `${str.substring(0, length)}...` : str;

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

export const getBarWidthFromData = (data: ChartData, width: number): number => {
    /* 1 is for the one bar witdth space between the groups */
    const barNumber = (1 + data.length) * data[0].serie.length;

    /* A group or a single bar of maximum 100 */
    const max = 150 / data.length;

    /* Always visible bars */
    const min = 1;

    return Math.min(max, Math.max(min, width / barNumber));
}

export const paddingNumberToObject = (padding: PaddingPropsOptional): PaddingProps =>
    ({
        top: padding?.top ?? 50,
        bottom: padding?.bottom ?? 70,
        left: padding?.left ?? 70,
        right: padding?.right ?? 50
    });
