import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Product, ProductData } from 'src/app/libs/utils/types';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ProductService],
})
export class ArticleListComponent implements OnInit, OnDestroy {
  secondes: number | string = 0;
  compterSubscription!: Subscription;
  products!: Product[];
  message!: string;
  constructor(private _productsService: ProductService) {}
  ngOnInit() {
    this.getProducts();
    const compter: Observable<number | string> = interval(1000).pipe(
      filter((v) => v % 2 === 0),
      map((v) =>
        v % 2 === 0 ? `Le nombre ${v} est paire` : `Le nombre ${v} est impaire`
      )
    );
    this.compterSubscription = compter.subscribe({
      next: (v) => (this.secondes = v),
      error: (e) => console.error(e),
      complete: () => console.log('Complete'),
    });
  }
  onGetInfo(arg: string) {
    this.message = arg;
  }
  getProducts() {
    this._productsService
      .getProductsFromServer()
      .subscribe((data: ProductData) => {
        this.products = data?.products;
      });
  }
  ngOnDestroy() {
    this.compterSubscription.unsubscribe();
  }
}
