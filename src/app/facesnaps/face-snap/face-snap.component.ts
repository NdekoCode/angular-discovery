import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  @Input() type!: string;
  // On met le point d'exclamation pour dire que c'est une variable qui ne sera jamais null et sera toujours de type string
  constructor(private router: Router) {}
  ngOnInit() {}
  onViewFaceSnap() {
    this.router.navigateByUrl(`/facesnaps/${this.faceSnap.id}`);
  }
}
