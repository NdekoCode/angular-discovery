import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [BookService],
})
export class LandingPageComponent {
  constructor(private _bookService: BookService, private router: Router) {}
  onContinue() {
    this.router.navigateByUrl('facesnaps');
  }
}
