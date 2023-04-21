import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMONS, booksData, faceSnapsData } from './../libs/data/constants';
import { FaceSnap } from './../libs/models/face-snap.model';
@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMONS;
    const books = booksData;

    const facesnaps: FaceSnap[] = faceSnapsData;
    return { pokemons, books, facesnaps };
  }
}
