import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from './../../../../services/pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss'],
})
export class ListPokemonComponent implements OnInit {
  title!: string;
  isLoading = true;
  pokemonList!: Pokemon[];
  filterPokemonList!: Pokemon[];
  constructor(
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}
  ngOnInit(): void {
    this._pokemonService.getPokemonList().subscribe({
      next: (pokemonList) => {
        this.pokemonList = pokemonList;
        this.filterPokemonList = pokemonList;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
  }
  takePokemon(arg: Event) {
    const target = arg.target as HTMLInputElement;
    if (target.value) {
      this.filterPokemonList = this.pokemonList.filter((p) =>
        p.name.toLowerCase().includes(target.value.toLowerCase())
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
