import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { booksData } from '../libs/data/constants';
import { Book } from './../libs/models/book.mode';
@Injectable()
export class BookService {
  books = booksData;
  constructor(private _httpClient: HttpClient) {}
  getBooks() {
    this._httpClient.get<Book[]>('/api/books').pipe(
      tap((res) => console.log(res)),
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
    return this.books;
  }
}
