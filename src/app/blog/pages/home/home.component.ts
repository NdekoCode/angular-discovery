import { Component, OnInit } from '@angular/core';
import { Post } from 'src/utils/types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  post!: Post;
  message!: string;
  ngOnInit() {
    this.post = {
      title: 'Un article',
      price: 5,
      image: '/assets/images/velo.jpeg',
      like: 0,
      description:
        "Une description, some quick example text to build on the card title and make up the bulk of the card's content.",
    };
  }
}
