import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from './../services/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  @Input() type!: string;
  // On met le point d'exclamation pour dire que c'est une variable qui ne sera jamais null et sera toujours de type string
  isLiked!: boolean;
  constructor(private FaceSnapService: FaceSnapService) {}
  ngOnInit() {
    this.isLiked = false;
  }
  onSnap() {
    if (this.isLiked) {
      this.FaceSnapService.snapFaceSnapById(this.faceSnap.id);
      this.isLiked = false;
    } else {
      this.FaceSnapService.snapFaceSnapById(this.faceSnap.id, 'inc');
      this.isLiked = true;
    }
  }
}
