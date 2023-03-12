import { Component, Input } from '@angular/core';
import { Post } from 'src/utils/types';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() post!: Post;
  comment: string = 'Ceci est un commentaire';
  onLike() {
    this.post.like++;
  }
}
