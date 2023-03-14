import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { HomeComponent } from './blog/home/home.component';
import { SingleArticleComponent } from './blog/single-article/single-article.component';
import { FaceSnapListComponent } from './facesnaps/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './facesnaps/face-snap/face-snap.component';
import { LandingPageComponent } from './facesnaps/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './facesnaps/single-face-snap/single-face-snap.component';
import { NotFoundComponent } from './not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'article/:id',
    component: SingleArticleComponent,
  },
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
  },
  {
    path: 'facesnapHome',
    component: LandingPageComponent,
  },
  {
    path: 'facesnaps/:id',
    component: SingleFaceSnapComponent,
  },
  {
    path: 'facesnap',
    // pathMatch: 'full',
    component: FaceSnapComponent,
  },
  {
    path: 'add-article',
    // pathMatch: 'full',
    component: AddArticleComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
