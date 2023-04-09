import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from '../../../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss'],
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon!: Pokemon;
  types!: string[];
  constructor(
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}
  ngOnInit() {
    this.types = this._pokemonService.getPokemonTypeList();
  }
  onSubmit(arg: NgForm) {
    this._router.navigate(['/pokemon', this.pokemon.id]);
  }
  hasType(type: string) {
    return this.pokemon.types.includes(type);
  }
  isTypesValid(type: string): boolean {
    const length = this.pokemon.types.length;
    // Si le pokemon n'a qu'un seul type et que je suis entrer de travailler sur le type courant alors je bloque la checkbox
    if (this.hasType(type) && length === 1) {
      return false;
    }
    // Si je ne suis pas entrer de travailler sur le checkbox courrant et que le nombre de type selectionner est plus que 2 alors je bloque egalement le checkbox
    if (!this.hasType(type) && length > 2) {
      return false;
    }
    return true;
  }
  selectType(e: Event, type: string) {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      this.pokemon.types.push(type);
    } else {
      this.pokemon.types = this.pokemon.types.filter((t) => t !== type);
    }
  }
}
