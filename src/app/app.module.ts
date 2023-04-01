import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardBodyComponent } from './components/card-body/card-body.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageSnapComponent } from './components/image-snap/image-snap.component';
import { AddArticleComponent } from './pages/blog/add-article/add-article.component';
import { ArticleListComponent } from './pages/blog/article-list/article-list.component';
import { ArticleComponent } from './pages/blog/article/article.component';
import { HomeComponent } from './pages/blog/home/home.component';
import { SingleArticleComponent } from './pages/blog/single-article/single-article.component';
import { UpdateArticleComponent } from './pages/blog/update-article/update-article.component';
import { FaceSnapListComponent } from './pages/facesnaps/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './pages/facesnaps/face-snap/face-snap.component';
import { LandingPageComponent } from './pages/facesnaps/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './pages/facesnaps/single-face-snap/single-face-snap.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PokemonAppComponent } from './pages/pokemon-app/pokemon-app.component';

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
    PokemonAppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
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
