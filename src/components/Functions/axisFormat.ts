import { ChartAxisFormatFunction } from './types';

export const returnSame = (i: string | number): string => i as string;

export const formatDateAsDays = (i: string): string =>
    (i && i.split('-')[2]);

export const formatDateAsDayMonth = (i: string): string => {
    if (!i) return '';
    const parts = i.split('-');
    return `${parts[1]}/${parts[2]}`;
}

export const formatNumberAsK = (n: string | number = 0): string =>
    (Math.abs(+n) > 1000)
        ? `${(+n / 1000).toFixed(1)}k`
        : `${(+n).toFixed(0)}`;

const axisFormat: Record<string, ChartAxisFormatFunction> = {
    default: returnSame,
    formatDateAsDays,
    formatDateAsDayMonth,
    formatNumberAsK
};

export default axisFormat;