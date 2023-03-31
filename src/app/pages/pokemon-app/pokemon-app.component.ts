import { Component } from '@angular/core';
import { POKEMONS } from './../../libs/data/constants';
import { Pokemon } from './../../libs/models/pokemon.model';

@Component({
  selector: 'app-pokemon-app',
  templateUrl: './pokemon-app.component.html',
  styleUrls: ['./pokemon-app.component.scss'],
})
export class PokemonAppComponent {
  title!: string;
  pokemonList: Pokemon[] = POKEMONS;
  ngOnInit(): void {
    console.log(this.pokemonList);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
}
