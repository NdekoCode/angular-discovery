import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddArticleComponent } from './blog/add-article/add-article.component';
import { ArticleListComponent } from './blog/article-list/article-list.component';
import { ArticleComponent } from './blog/article/article.component';
import { HomeComponent } from './blog/home/home.component';
import { SingleArticleComponent } from './blog/single-article/single-article.component';
import { UpdateArticleComponent } from './blog/update-article/update-article.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSnapComponent } from './components/image-snap/image-snap.component';
import { FaceSnapListComponent } from './facesnaps/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './facesnaps/face-snap/face-snap.component';
import { LandingPageComponent } from './facesnaps/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './facesnaps/single-face-snap/single-face-snap.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    ImageSnapComponent,
    CardFooterComponent,
    CardBodyComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent,
    ArticleComponent,
    FooterComponent,
    HomeComponent,
    ArticleListComponent,
    SingleArticleComponent,
    NotFoundComponent,
    AddArticleComponent,
    UpdateArticleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
