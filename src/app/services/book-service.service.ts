import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { booksData } from '../libs/data/constants';
import { Book } from './../libs/models/book.mode';
import { ApiService } from './api.service';
@Injectable()
export class BookService {
  books = booksData;
  constructor(private _httpClient: HttpClient, private apiConfig: ApiService) {}
  getBooks() {
    this._httpClient.get<Book[]>(this.apiConfig.baseUrl + '/books');
  }
}
