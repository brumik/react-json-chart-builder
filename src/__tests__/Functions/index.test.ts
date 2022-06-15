import functions from '../../components/Functions/';

describe('Chart/Functions/index', () => {
    test('should return an object of functions with 4 entries', () => {
        expect(Object.keys(functions)).toEqual([
            'onClick', 'axisFormat', 'labelFormat', 'tooltipComponent'
        ]);
    })
});
