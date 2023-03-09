import { Injectable } from '@angular/core';
import { faceSnapsData } from 'src/utils/constants';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = faceSnapsData;

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  snapFaceSnapById(faceSnapId: number) {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap not found');
    }
  }
}
