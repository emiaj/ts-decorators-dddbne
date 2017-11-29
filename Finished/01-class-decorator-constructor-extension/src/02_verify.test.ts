import { Product } from './01_product';

test('product can be saved', () => {
    const product = new Product(1, 'Laptop', 'PR01');

    expect(product['save']).not.toBeUndefined();

});
