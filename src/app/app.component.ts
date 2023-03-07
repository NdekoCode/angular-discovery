import { Component, OnInit } from '@angular/core';
import { faceSnapsData } from 'src/utils/constants';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;
  faceSnaps!: FaceSnap[];
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;
  typeSnap!: string;

  ngOnInit(): void {
    this.typeSnap = 'Photos';
    this.faceSnaps = faceSnapsData;
  }
}
