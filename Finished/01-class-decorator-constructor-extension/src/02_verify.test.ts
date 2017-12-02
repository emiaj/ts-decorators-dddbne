import { Product } from './01_product';
import { Rest } from './03_persistence';
let product: Product;

beforeEach(() => {
    product = new Product(1, 'Laptop', 'PR01');
});

test('product can be posted', () => {
    expect(product['post']).not.toBeUndefined();
});

test('product can be patched', () => {
    expect(product['patch']).not.toBeUndefined();
});

test('product can be deleted', () => {
    expect(product['del']).not.toBeUndefined();
});

test('strongly typed version', () => {
    let restyProduct = product as Rest<Product>;

    restyProduct.name = "Monitor";
    restyProduct.patch();

    restyProduct.name = "Adapter";
    restyProduct.del();
});