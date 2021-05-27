import {
    formatDateAsDayMonth,
    formatDateAsDays,
    formatNumberAsK,
    returnSame
} from '../../components/Functions/axisFormat';

describe('Chart/Functions/axisFormat', () => {
    test('should return the same string', () => {
        expect(returnSame('returned same')).toBe('returned same');
    });
    
    test('should return date as days', () => {
        expect(formatDateAsDays('2020-04-25')).toBe('25');
    });

    test('should return date as day and month', () => {
        expect(formatDateAsDayMonth('2020-05-25')).toBe('05/25');
    });

    test('should return numbers in (number/1000)K format', () => {
        expect(formatNumberAsK(100)).toBe('100');
        expect(formatNumberAsK(2000)).toBe('2k');
    })
});
