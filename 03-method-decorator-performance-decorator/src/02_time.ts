export default function time(instance: any, key: string, descriptor: PropertyDescriptor) {
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