type FuncWithArgs = (...args: any[]) => any;

export default function log(instance: Object, key: string, descriptor: TypedPropertyDescriptor<FuncWithArgs>) {
    const originalMethod = descriptor.value;

    if (originalMethod) {

        descriptor.value = function (...args: any[]) {
            var parameters = args.join();

            var result = originalMethod.apply(instance, args);

            console.log('Call: ' + key + '(' + parameters + ') => ' + result);

            return result;
        };
    }

    return descriptor;
}