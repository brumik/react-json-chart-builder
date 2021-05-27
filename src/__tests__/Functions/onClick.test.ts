import { consoleLogValue } from '../../components/Functions/onClick';

describe('Chart/Functions/onClik', () => {
    test('should console log the on click params', () => {
        console.log = jest.fn();
        const ev = { param: 1, param2: 2 };
        const params = { param3: 3, param4: 4 };

        consoleLogValue(ev, params);

        expect(console.log).toHaveBeenCalledWith('onclick', ev, params);
    })
});
