import { Injectable } from '@angular/core';
import { products } from 'src/utils/constants';
import { Product } from 'src/utils/types';

@Injectable()
export class ProductService {
  products: Product[] = products;
  getAllProducts() {
    return this.products;
  }
  getProductById(productId: string | number): Product {
    const product: Product = this.products.find(
      (p) => p.id === productId
    ) as Product;

    return product;
  }
}
