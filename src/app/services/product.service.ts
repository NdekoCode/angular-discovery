import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ProductData } from 'src/app/libs/utils/types';
import { ApiService } from './api.service';

@Injectable()
export class ProductService {
  products: Product[] = [];
  constructor(
    private _httpClient: HttpClient,
    private _apiConfig: ApiService
  ) {}
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
    return this._httpClient.get<ProductData>(
      `${this._apiConfig.baseUrl}/products`
    );
  }
}
