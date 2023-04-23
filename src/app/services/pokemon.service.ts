import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { ApiService } from './api.service';
@Injectable()
export class PokemonService {
  constructor(
    private _httpClient: HttpClient,
    private _apiConfig: ApiService
  ) {}
  getPokemonList(): Observable<Pokemon[]> {
    // On fait une requete avec le client HTTP d'angular et on va recevoir un observable, la reponse contient une liste de pokemon
    return this._httpClient
      .get<Pokemon[]>(`${this._apiConfig.baseUrl}/pokemons`)
      .pipe(
        tap((pokemonList) => this.log(pokemonList)),
        // Si il y a une erreur on va retourner tableau vide au lieu de faire crasher l'application
        /**
         * - L'operateur tap: c'est l'equivalent d'un console.log adapter à un observable, cet operateur ne va pas intervenir sur la requete en elle meme mais on va simplement pouvoir faire des petites opérations à chaque qu'il y a une nouvelle reponse qui est apporter, "tap" n'a pas d'incidence sur le flux en sois.
         * - catchError: est un operateur qui nous permet d'intercepter une erreur et de retourner un tableau vide plutot que l'application crache
         * - of(): est un operateur qui permet de transformer une donnée simple passer en paramètre en un flux de donnée (un observable) qui emet la donnée passer en paramètre.
         */
        catchError((err) => this.handleError(err, []))
      );
  }
  getPokemonById(pokemonId: number): Observable<Pokemon | null> {
    console.log(`${this._apiConfig.baseUrl}/pokemons/${pokemonId}`);
    return this._httpClient.get<Pokemon>(
      `${this._apiConfig.baseUrl}/pokemons/${pokemonId}`
    );
  }
  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Normal',
      'Electrik',
      'Poison',
      'Vol',
      'Combat',
      'Psy',
    ];
  }
  updatePokemon(pokemon: Pokemon): Observable<Pokemon | null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._httpClient.put<Pokemon>(
      `${this._apiConfig.baseUrl}/pokemons/${pokemon.id}`,
      pokemon,
      httpOptions
    );
  }
  deletePokemon(pokemonId: string | number): Observable<Pokemon> {
    return this._httpClient.delete<Pokemon>(
      `${this._apiConfig.baseUrl}/pokemons/${pokemonId}`
    );
  }
  addPokemon(pokemon: Pokemon): Observable<null> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    return this._httpClient.post<null>(
      `${this._apiConfig.baseUrl}/pokemons`,
      pokemon,
      httpOptions
    );
  }
  searchPokemonList(searchTerm: string): Observable<Pokemon[]> {
    if (searchTerm && searchTerm.trim().length > 1) {
      // Faire des recherches par termes
      return this._httpClient
        .get<Pokemon[]>(`${this._apiConfig.baseUrl}/pokemons/?q=${searchTerm}`)
        .pipe(
          tap((response) => {
            if (response) {
              console.log(response);
            }
          }),
          catchError((err) => {
            console.log(err);
            return of([]);
          })
        );
    }
    return of([]);
  }
  private log<T>(value: T): void {
    console.log(value);
  }
  private handleError<T>(error: Error, errorValue: T): Observable<T> {
    console.error(error);
    return of(errorValue);
  }
}
