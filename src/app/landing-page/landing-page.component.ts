import { Component } from '@angular/core';
import { BookService } from '../services/book-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [BookService],
})
export class LandingPageComponent {
  constructor(private _bookService: BookService) {}
}
