import { Component, OnInit } from '@angular/core';
import { products } from 'src/utils/constants';
import { Product } from 'src/utils/types';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
})
export class ArticleListComponent implements OnInit {
  products!: Product[];
  message!: string;
  ngOnInit() {
    this.products = products;
  }
  onGetInfo(arg: string) {
    console.log(arg);
    this.message = arg;
  }
}
