import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BorderCardDirective } from 'src/app/directives/border-card.directive';
import { DetailPokemonComponent } from 'src/app/pages/detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from 'src/app/pages/list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from 'src/app/pipes/pokemon-type-color.pipe';

@NgModule({
  declarations: [
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
  ],
  imports: [CommonModule],
})
export class PokemonModule {}
