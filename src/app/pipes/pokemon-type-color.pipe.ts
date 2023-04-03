import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor',
})
export class PokemonTypeColorPipe implements PipeTransform {
  transform(type: unknown, ...args: unknown[]): unknown {
    let color: string;

    switch (type) {
      case 'Feu':
        color = 'alert alert-danger  lighten-1';
        break;
      case 'Eau':
        color = 'alert alert-primary lighten-1';
        break;
      case 'Plante':
        color = 'alert alert-success lighten-1';
        break;
      case 'Insecte':
        color = 'alert alert-secondary  lighten-1';
        break;
      case 'Normal':
        color = 'alert alert-info  lighten-3';
        break;
      case 'Vol':
        color = 'alert bg-primary   lighten-3';
        break;
      case 'Poison':
        color = 'alert alert-dark  accent-1';
        break;
      case 'Fée':
        color = 'alert bg-light  lighten-4';
        break;
      case 'Psy':
        color = 'alert bg-danger  darken-2';
        break;
      case 'Electrik':
        color = 'alert bg-secondary  accent-1';
        break;
      case 'Combat':
        color = 'deep-orange border alert';
        break;
      default:
        color = 'alert bg-secondary';
        break;
    }

    return 'rounded-lg m-1 p-2 ' + color;
  }
}
