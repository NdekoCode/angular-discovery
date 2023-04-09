import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss'],
})
export class EditPokemonComponent {
  pokemon!: Pokemon;
  constructor(
    private _pokemonService: PokemonService,
    private _router: ActivatedRoute
  ) {}
  ngOnInit() {
    const id: number = +this._router.snapshot.params['id'];
    this.pokemon = this._pokemonService.getPokemonById(id)!;
  }
}
