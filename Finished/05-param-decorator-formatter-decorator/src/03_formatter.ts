export interface IFormatter {
    format(args: any[]): void;
}

export class FormatterRegistry {

    private readonly formatters: IFormatter[] = [];

    register(formatter: IFormatter) {
        this.formatters.push(formatter);
    }

    format(args: any[]): void {
        for (let formatter of this.formatters) {
            formatter.format(args);
        }
    }
}

export class TrimFormatter implements IFormatter {

    constructor(private index: number) {
    }

    format(args: any[]): void {
        args[this.index] = args[this.index].trim();
    }
}

export class UpperCaseFormatter implements IFormatter {
    constructor(private index: number) {
    }

    format(args: any[]): void {
        args[this.index] = args[this.index].toUpperCase();
    }
}