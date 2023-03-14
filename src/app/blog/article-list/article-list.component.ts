import { Component, OnInit } from '@angular/core';
import { Product } from 'src/utils/types';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ProductService],
})
export class ArticleListComponent implements OnInit {
  products!: Product[];
  message!: string;
  constructor(private _productsService: ProductService) {}
  ngOnInit() {
    this.products = this._productsService.getAllProducts();
  }
  onGetInfo(arg: string) {
    this.message = arg;
  }
}
