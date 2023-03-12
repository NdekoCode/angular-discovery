import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './blog/components/footer/footer.component';
import { NavbarComponent } from './blog/components/navbar/navbar.component';
import { ArticleComponent } from './blog/pages/article/article.component';
import { HomeComponent } from './blog/pages/home/home.component';
import { CardBodyComponent } from './faceSnapsTutos/components/card-body/card-body.component';
import { CardFooterComponent } from './faceSnapsTutos/components/card-footer/card-footer.component';
import { HeaderComponent } from './faceSnapsTutos/components/header/header.component';
import { ImageSnapComponent } from './faceSnapsTutos/components/image-snap/image-snap.component';
import { FaceSnapListComponent } from './faceSnapsTutos/pages/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './faceSnapsTutos/pages/face-snap/face-snap.component';
import { LandingPageComponent } from './faceSnapsTutos/pages/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './faceSnapsTutos/pages/single-face-snap/single-face-snap.component';

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
    NavbarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
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
