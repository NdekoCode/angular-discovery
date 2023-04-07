import { Injectable } from '@angular/core';
import { POKEMONS } from '../libs/data/constants';
import { Pokemon } from '../libs/models/pokemon.model';
@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }
  getPokemonById(pokemonId: number): Pokemon | null {
    return POKEMONS.find((p) => p.id === pokemonId) || null;
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
}
