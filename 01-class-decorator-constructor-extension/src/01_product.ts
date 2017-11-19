export class Product {

    id: number;
    name: string;
    sku: string;

    constructor(id: number, name: string, sku: string) {
        this.id = id;
        this.name = name;
        this.sku = sku;
    }
}