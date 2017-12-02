type FuncWithArgs = (...args: any[]) => any;

export default function time(instance: any,
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