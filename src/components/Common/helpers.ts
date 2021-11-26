import {
    ChartAxisFormatFunction,
    ChartDataSerie,
    PaddingProps,
    PaddingPropsOptional
} from '../types';

export const snakeToSentence = (str: string): string => {
    const sentence = str.toLowerCase().split('_');
    sentence[0] = sentence[0][0].toUpperCase() + sentence[0].slice(1);
    return sentence.join(' ');
}

export const turncateAt = (str: string, length: number): string =>
    str.length > length ? `${str.substring(0, length)}...` : str;

export const wrapAt = (str: string, length: number): string =>
    // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
    str.length > length ? str.match(new RegExp(`.{1,${length}}`, 'g')).join('\n') : str;

export const axisFormatPreprocess = ({
    wrapText = false,
    turncateAtNumber = Infinity,
    fnc
}: {
    wrapText: boolean,
    turncateAtNumber: number,
    fnc: ChartAxisFormatFunction
}) => (n: string | number): string => {
    n = wrapText
        ? wrapAt(n.toString(), turncateAtNumber)
        : turncateAt(n.toString(), turncateAtNumber);

    return fnc(n);
}

export const getBarWidthFromData = (data: ChartDataSerie[], width: number): number => {
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
