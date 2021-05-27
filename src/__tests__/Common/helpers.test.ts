import {
    snakeToSentence,
    //getBarWidthFromData
} from '../../components/Common/helpers';

describe('Chart/Common/helpers', () => {
    test('should convert snakeToSentence case', () => {
        expect(snakeToSentence('this_is_snake_case')).toBe('This is snake case');
    });

    xtest('should get the correct bar width from data', () => { })
});