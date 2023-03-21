import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
})
export class UpdateArticleComponent {
  onSubmit(form: NgForm) {
    console.log(form, 'Is submitted');
  }
}
