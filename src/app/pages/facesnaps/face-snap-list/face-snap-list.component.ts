import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FaceSnap } from '../../../libs/models/face-snap.model';
import { FaceSnapService } from '../../../services/face-snap.service';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  constructor(private faceSnapService: FaceSnapService) {}
  faceSnaps!: FaceSnap[];
  typeSnap!: string;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.typeSnap = 'Photos';
    this.faceSnapService.getAllFaceSnaps().subscribe(
      (faceSnaps) => {
        this.faceSnaps = faceSnaps;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
        of([]);
      }
    );
  }
}
