import log from './03_log';

class Calculator {
    @log
    static sum(a: number, b: number) {
        return a + b;
    }
    @log
    static multiply(a: number, b: number) {
        return a * b;
    }
}

export default Calculator;