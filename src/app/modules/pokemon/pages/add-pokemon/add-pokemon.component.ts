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
    this.pokemon = new Pokemon();
  }
  onAddPokemon(pokemon: Pokemon) {
    this._pokemonService.addPokemon(pokemon).subscribe(() => {
      this._router.navigate(['/pokemon', pokemon.id]);
    });
  }
}
