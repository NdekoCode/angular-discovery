import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-snap',
  templateUrl: './image-snap.component.html',
  styleUrls: ['./image-snap.component.scss'],
})
export class ImageSnapComponent {
  @Input() image!: string;
  @Input() title!: string;
}
