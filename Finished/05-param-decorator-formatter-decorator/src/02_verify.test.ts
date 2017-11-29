import Greeter from './01_greeter';

describe('Format decorator tests', () => {
    test('Uppercase parameters', () => {
        expect(Greeter.greet('DDD Brisbane')).toBe('HELLO DDD BRISBANE');
    });

    test('Trim whitespace parameters', () => {
        expect(Greeter.greet('   DDD Brisbane   ')).toBe('HELLO DDD BRISBANE');
    });
});