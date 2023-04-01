import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductData } from 'src/app/libs/utils/types';

@Injectable()
export class ProductService {
  products: any[] = [];
  constructor(private _httpClient: HttpClient) {}
  getAllProducts() {
    return this.products;
  }
  getProductById(productId: string | number): Product {
    const product: Product = this.products.find(
      (p) => p.id === productId
    ) as Product;

    return product;
  }
  getProductsFromServer() {
    return this._httpClient.get<ProductData>('/assets/data/products.json');
  }
}
