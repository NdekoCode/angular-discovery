import { Injectable } from '@angular/core';
import { products } from 'src/utils/constants';
import { Product } from 'src/utils/types';

@Injectable()
export class ProductService {
  products: Product[] = products;
  getAllProducts() {
    return this.products;
  }
  constructor() {}
}
