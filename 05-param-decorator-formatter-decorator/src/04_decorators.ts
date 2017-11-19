import 'reflect-metadata';
import { FormatterRegistry, UpperCaseFormatter, TrimFormatter } from './03_formatter';

export const FormatterMetadataKey = Symbol('FormatterMetadataKey');

export function format(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value;
    if (originalFunction) {
        descriptor.value = (...args: any[]) => {
            let local = args;
            let registry: FormatterRegistry = Reflect.getOwnMetadata(FormatterMetadataKey, target, propertyKey);
            if (registry) {
                registry.format(local);
            }
            return originalFunction.apply(target, local);
        };
    }
    return descriptor;
}

export function trim(target: Object, propertyKey: string, parameterIndex: number): void {
    let registry: FormatterRegistry = Reflect.getOwnMetadata(FormatterMetadataKey, target, propertyKey) || new FormatterRegistry();

    registry.register(new TrimFormatter(parameterIndex));
    
    Reflect.defineMetadata(FormatterMetadataKey, registry, target, propertyKey);
}

export function upperCase(target: Object, propertyKey: string, parameterIndex: number): void {
    let registry: FormatterRegistry = Reflect.getOwnMetadata(FormatterMetadataKey, target, propertyKey) || new FormatterRegistry();
    registry.register(new UpperCaseFormatter(parameterIndex));
    Reflect.defineMetadata(FormatterMetadataKey, registry, target, propertyKey);
}
