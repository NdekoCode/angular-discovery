import { Injectable } from '@angular/core';
import { booksData } from '../libs/data/constants';
@Injectable()
export class BookService {
  books = booksData;
  getBooks() {
    return this.books;
  }
}
