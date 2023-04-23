import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkeletonCardComponent } from 'src/app/components/skeleton-card/skeleton-card.component';
import { SpinnerComponent } from './../../components/spinner/spinner.component';

@NgModule({
  declarations: [SpinnerComponent, SkeletonCardComponent],
  imports: [CommonModule],
  exports: [SpinnerComponent, SkeletonCardComponent],
})
export class ShareModuleModule {}
