import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  // On met le point d'exclamation pour dire que c'est une variable qui ne sera jamais null et sera toujours de type string
  isLiked!: boolean;
  faceSnap!: FaceSnap;
  faceSnapId!: number;
  constructor(
    private _snapService: FaceSnapService,
    private router: ActivatedRoute
  ) {}
  ngOnInit() {
    this.isLiked = false;
    // On fait du typeCast: ça nous permet de transformer une chaine de caractère qui contient des nombres et les transformer en Number
    this.faceSnapId = +this.router.snapshot.params['id'];
    this.faceSnap = this._snapService.getFaceSnapById(this.faceSnapId);
  }
  onSnap() {
    if (this.isLiked) {
      this._snapService.snapFaceSnapById(this.faceSnap.id);
      this.isLiked = false;
    } else {
      this._snapService.snapFaceSnapById(this.faceSnap.id, 'inc');
      this.isLiked = true;
    }
  }
}
