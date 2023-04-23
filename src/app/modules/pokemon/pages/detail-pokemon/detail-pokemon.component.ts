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
  isLoading: boolean = true;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}
  ngOnInit() {
    const id: number = this._route.snapshot.params['id'];
    this._pokemonService.getPokemonById(id).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon as Pokemon;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      },
    });
  }
  onDeletePokemon(id: string | number) {
    this._pokemonService.deletePokemon(id).subscribe(() => {
      this._router.navigate(['pokemons']);
    });
  }
  goBack() {
    this._router.navigate(['/pokemons']);
  }
}
