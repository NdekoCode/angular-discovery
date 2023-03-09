import { Injectable } from '@angular/core';
import { faceSnapsData } from 'src/utils/constants';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = faceSnapsData;
}
