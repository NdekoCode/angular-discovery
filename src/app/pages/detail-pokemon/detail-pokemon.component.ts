import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/app/libs/data/constants';
import { Pokemon } from 'src/app/libs/models/pokemon.model';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent implements OnInit {
  pokemon!: Pokemon | undefined;
  constructor(private _router: ActivatedRoute) {}
  ngOnInit() {
    const id: number = +this._router.snapshot.params['id'];
    this.pokemon = POKEMONS.find((p) => p.id == id);
    console.log(this.pokemon);
  }
}