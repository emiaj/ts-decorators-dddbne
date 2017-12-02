
export default function log(instance: Function,
    key: string,
    descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        let parameters = args.join();

        const result = originalMethod.apply(instance, args);

        console.log('Call: ' + key + '(' + parameters + ') => ' + result);

        return result;
    };

    return descriptor;
}