import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'facesnaps',
    component: FaceSnapListComponent,
  },
  {
    path: 'facesnapHome',
    // pathMatch: 'full',
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
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
