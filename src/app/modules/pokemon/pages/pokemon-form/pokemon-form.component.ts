import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from './../../../../services/pokemon.service';

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
    return this.types.includes(type);
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
