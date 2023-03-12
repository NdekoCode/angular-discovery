import { Component, OnInit } from '@angular/core';
import { faceSnapsData } from 'src/utils/constants';
import { FaceSnap } from './models/face-snap.model';
import { BookService } from './services/book-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BookService],
})
export class AppComponent implements OnInit {
  snap!: FaceSnap;
  faceSnaps!: FaceSnap[];
  secondSnap!: FaceSnap;
  thirdSnap!: FaceSnap;
  typeSnap!: string;
  constructor(private _bookService: BookService) {}
  ngOnInit(): void {
    this.typeSnap = 'Photos';
    this.faceSnaps = faceSnapsData;
  }
}
