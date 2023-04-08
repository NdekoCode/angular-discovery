import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './pages/list-pokemon/list-pokemon.component';
import { PokemonFormComponent } from './pages/pokemon-form/pokemon-form.component';
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
    PokemonFormComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(pokemonRoutes), FormsModule],
  exports: [RouterModule],
  providers: [PokemonService],
})
export class PokemonModule {}
