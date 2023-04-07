import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
const pokemonRoutes: Routes = [
  {
    path: 'pokemon-app',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    component: ListPokemonComponent,
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
  },
];
@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
  exports: [RouterModule],
})
export class PokemonModule {}
