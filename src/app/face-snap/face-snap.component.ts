import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

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
  /** Pour les likes sur une photos */
  snaps!: number;

  ngOnInit() {
    this.isLiked = false;
  }
  onSnap() {
    if (this.isLiked) {
      // this.snaps--;
      this.faceSnap.snaps--;
      this.isLiked = false;
    } else {
      this.faceSnap.snaps++;
      this.isLiked = true;
    }
  }
}
