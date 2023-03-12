import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() product!: Product;
  @Output() info = new EventEmitter<string>();
  comment: string = 'Ceci est un commentaire';
  onLike() {
    this.info.emit(this.product.title);
    this.product.like++;
  }
}
