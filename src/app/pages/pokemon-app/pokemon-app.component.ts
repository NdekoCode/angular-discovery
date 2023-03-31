import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-app',
  templateUrl: './pokemon-app.component.html',
  styleUrls: ['./pokemon-app.component.scss'],
})
export class PokemonAppComponent {
  title!: string;
  pokemonList: (string | number)[] = ['Bulbizarre', 'Salamèche', 'Carapuce'];
  ngOnInit(): void {
    console.log(this.pokemonList);
  }

  selectPokemon(pokemonName: string | number) {
    console.log(pokemonName);
  }
}
