import Calculator from './01_calculator';

describe('Calculator test', () => {

    it('can sum two numbers', () => {
        expect(Calculator.sum(2, 5)).toBe(7);
    });

    it('can multiply two numbers', () => {
        expect(Calculator.multiply(7, 3)).toBe(21);
    });
});