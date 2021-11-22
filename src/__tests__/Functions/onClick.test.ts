import onClick from '../../components/Functions/onClick';

describe('Chart/Functions/onClik', () => {
    test('should console log the on click params', () => {
        console.log = jest.fn();
        const params = { param3: 3, param4: 4 };

        onClick.consoleLog(null, params);

        expect(console.log).toHaveBeenCalledWith('onclick', null, params);
    })
});
