type FuncWithArgs<T = any> = (...args: any[]) => T;

export default function time(instance: Function,
    key: string,
    descriptor: TypedPropertyDescriptor<FuncWithArgs>) {

    const originalMethod = descriptor.value;

    if (originalMethod) {

        descriptor.value = function (...args: any[]) {
            console.time(key);
            const result = originalMethod.apply(instance, args);
            console.timeEnd(key);

            return result;
        };
    }

    return descriptor;
}