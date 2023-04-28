import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ShareModuleModule } from '../share-module/share-module.module';
import { AuthGuard } from './../../auth.guard';
import { BorderCardDirective } from './border-card.directive';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { AddPokemonComponent } from './pages/add-pokemon/add-pokemon.component';
import { DetailPokemonComponent } from './pages/detail-pokemon/detail-pokemon.component';
import { EditPokemonComponent } from './pages/edit-pokemon/edit-pokemon.component';
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
    path: 'pokemon/add',
    component: AddPokemonComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'pokemon/:id',
    component: DetailPokemonComponent,
  },
  {
    path: 'pokemon/edit/:id',
    component: EditPokemonComponent,
    canActivate: [AuthGuard],
  },
];
@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
    FormsModule,
    ShareModuleModule,
  ],
  exports: [RouterModule],
  providers: [PokemonService],
})
export class PokemonModule {}
