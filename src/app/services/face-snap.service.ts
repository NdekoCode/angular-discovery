import { Injectable } from '@angular/core';
import { faceSnapsData } from '../libs/data/constants';
import { FaceSnap } from '../libs/models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  faceSnaps: FaceSnap[] = faceSnapsData;

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }
  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );

    if (!faceSnap) {
      throw new Error('FaceSnap not found');
    } else {
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType?: string) {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'inc' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
