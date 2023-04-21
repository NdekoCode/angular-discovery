import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../libs/utils/types';
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
  getProductById(productId: string | number): Observable<Product> {
    return this._httpClient.get<Product>(
      `${this._apiConfig.baseUrl}/products/${productId}`
    );
  }
  getProductsFromServer() {
    return this._httpClient.get<Product[]>(
      `${this._apiConfig.baseUrl}/products`
    );
  }
}
