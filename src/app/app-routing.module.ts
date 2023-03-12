import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './blog/pages/home/home.component';
import { FaceSnapListComponent } from './faceSnapsTutos/pages/face-snap-list/face-snap-list.component';
import { FaceSnapComponent } from './faceSnapsTutos/pages/face-snap/face-snap.component';
import { LandingPageComponent } from './faceSnapsTutos/pages/landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './faceSnapsTutos/pages/single-face-snap/single-face-snap.component';
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
