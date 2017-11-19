import { Fibonacci } from './01_fibonacci';

describe('Fibonacci performance tests', () => {
    test('large value', () => {
        expect(Fibonacci.compute(40)).toBe(102334155);
    });
});