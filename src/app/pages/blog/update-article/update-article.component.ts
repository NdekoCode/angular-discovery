import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.scss'],
})
export class UpdateArticleComponent {
  title = new FormControl('');
  price = new FormControl(0);
  onSubmit(form: NgForm) {
    console.log(form, 'Is submitted', this.title.value, this.price.value);
  }
}
