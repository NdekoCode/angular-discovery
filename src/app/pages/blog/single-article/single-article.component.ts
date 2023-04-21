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
  isLoading = true;
  constructor(
    private _productService: ProductService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    const id: string | number = +this.router.snapshot.params['id'];
    this._productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
    });
    console.log(this.product);
  }
}
