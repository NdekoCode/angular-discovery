import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { POKEMONS } from './../../libs/data/constants';
import { Pokemon } from './../../libs/models/pokemon.model';
@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent {
  title!: string;
  pokemonList: Pokemon[] = POKEMONS;
  filterPokemonList: Pokemon[] = POKEMONS;
  constructor(private _router: Router) {}
  ngOnInit(): void {
    console.table(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
  takePokemon(arg: Event) {
    const target = arg.target as HTMLInputElement;
    if (target.value) {
      this.filterPokemonList = this.pokemonList.filter(
        (p) => p.id === +target.value
      );
    } else {
      this.filterPokemonList = this.pokemonList;
    }
  }
  getEnterDate(arg: string) {
    console.log(arg);
  }
  goToPokemon(pokemon: Pokemon) {
    this._router.navigate(['/pokemon', pokemon.id]);
  }
}
