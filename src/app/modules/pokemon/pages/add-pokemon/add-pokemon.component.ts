import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from './../../../../libs/models/pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss'],
})
export class AddPokemonComponent implements OnInit {
  uuid!: string | number;
  pokemon!: Pokemon;
  constructor(
    private _pokemonService: PokemonService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.uuid = Math.random().toString(36).substring(0, 6);
    this.pokemon = {
      id: this.uuid,
      name: '',
      hp: 0,
      cp: 0,
      picture: '',
      types: [],
      createdAt: new Date(),
    };
  }
  onAddPokemon(pokemon: Pokemon) {
    this._pokemonService.addPokemon(pokemon).subscribe(() => {
      this._router.navigate(['/pokemons']);
    });
  }
}
