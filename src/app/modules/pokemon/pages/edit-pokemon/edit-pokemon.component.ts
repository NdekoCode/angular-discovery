import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss'],
})
export class EditPokemonComponent {
  pokemon!: Pokemon;
  isLoading: boolean = true;
  constructor(
    private _pokemonService: PokemonService,
    private _routes: ActivatedRoute,
    private _router: Router
  ) {}
  ngOnInit() {
    const id: number = this._routes.snapshot.params['id'];
    this._pokemonService.getPokemonById(id).subscribe({
      next: (pokemon) => {
        this.pokemon = pokemon!;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      },
    });
  }
  editPokemon(id: string | number) {
    this._pokemonService.updatePokemon(this.pokemon).subscribe((pokemon) => {
      this.pokemon = pokemon as Pokemon;
      this._router.navigate(['/pokemon', id]);
    });
  }
}
