import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { FaceSnap } from '../libs/models/face-snap.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapService {
  constructor(private _httpClient: HttpClient) {}
  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this._httpClient.get<FaceSnap[]>('api/facesnaps').pipe(
      tap((res) => console.log(res)),
      catchError((err) => {
        console.log(err);
        return of([]);
      })
    );
  }
  getFaceSnapById(faceSnapId: number): Observable<FaceSnap | null> {
    return this._httpClient.get<FaceSnap>(`/api/facesnaps/${faceSnapId}`).pipe(
      tap((res) => console.log(res)),
      catchError((err) => {
        console.error(err);
        return of(null);
      })
    );
  }
  snapFaceSnapById(faceSnapId: number, snapType?: string) {
    this.getFaceSnapById(faceSnapId).subscribe((faceSnap) => {
      if (faceSnap) {
        snapType === 'inc' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
    });
  }
}
