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

  onSubmit(form: NgForm) {
    console.log('TITRE: ' + this.title);
    console.log('PRIX: ' + this.price);
    console.log(form);
  }
}
