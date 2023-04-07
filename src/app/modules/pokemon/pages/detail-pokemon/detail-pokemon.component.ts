import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  pokemon!: Pokemon | undefined;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}
  ngOnInit() {
    const id: number = +this._route.snapshot.params['id'];
    this.pokemon = this._pokemonService.getPokemonById(id) as Pokemon;
  }
  goBack() {
    this._router.navigate(['/pokemons']);
  }
}
