import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './pages/blog/add-article/add-article.component';
import { HomeComponent } from './pages/blog/home/home.component';
import { SingleArticleComponent } from './pages/blog/single-article/single-article.component';
import { UpdateArticleComponent } from './pages/blog/update-article/update-article.component';
import { FaceSnapListComponent } from './pages/facesnaps/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './pages/facesnaps/face-snap/face-snap.component';
import { LandingPageComponent } from './pages/facesnaps/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './pages/facesnaps/single-face-snap/single-face-snap.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
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
    path: 'update-article',
    // pathMatch: 'full',
    component: UpdateArticleComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
