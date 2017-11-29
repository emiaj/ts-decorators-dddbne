import { trim, upperCase, format } from './04_decorators';
export default class Greeter {
    @format
    static greet(@trim @upperCase name: string): string {
        return 'HELLO ' + name;
    }
}
