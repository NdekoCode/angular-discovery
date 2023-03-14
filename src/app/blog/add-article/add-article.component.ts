import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss'],
})
export class AddArticleComponent {
  title!: string;
  price!: number;
  formSubmit(form: NgForm) {
    console.log('TITLE : ', this.title, 'PRIX: ', this.price);
  }
}
