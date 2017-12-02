interface RestContract {
    post(): void;
    patch(): void;
    del(): void;
}

export function rest(func: Function) {
    const extension = new class implements RestContract {
        post() {
            console.log(`Posting ${JSON.stringify(this)}`);
        }
        patch() {
            console.log(`Patching ${JSON.stringify(this)}`);
        }
        del() {
            console.log(`Deleting ${JSON.stringify(this)}`);
        }
    }

    for (let property in extension) {
        func.prototype[property] = extension[property];
    }
}

export type Rest<T> = T & RestContract;