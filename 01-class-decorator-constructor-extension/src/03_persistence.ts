interface Saveable {
    save(): void;
}

export type Persistence<T> = T & Saveable;

export function PersistenceDecorator<T extends Function>(constructor: T) {
    constructor.prototype.save = function () {
        console.log(`Posting entity ${JSON.stringify(this)}`);
    };
}