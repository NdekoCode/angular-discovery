import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/libs/utils/types';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss'],
  providers: [ProductService],
})
export class SingleArticleComponent implements OnInit {
  product!: Product;
  constructor(
    private _productService: ProductService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    const id: string | number = +this.router.snapshot.params['id'];
    this.product = this._productService.getProductById(id);
    console.log(this.product);
  }
}
