import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';
import { Pokemon } from 'src/app/libs/models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss'],
})
export class SearchPokemonComponent implements OnInit {
  // Subject: est une classe rxjs qui est un peu comme un observable qui permet de consommer les donnés dans le temps, à la difference que un Observable on ne peut que le consommer en utilisant la methode "subscribe" pour recevoir les données dans le temps qui va nous permettre de stocker les recherches sucessives des utilisateurs realiser dans un champs de recherche input, la on veut optenir un flux dans le temps de recherche des utilisateurs. et cela est equivaut au flux suivant:
  // {..a...abc...c..de..abc}
  searchTerms = new Subject<string>();
  pokemons$!: Observable<Pokemon[]>;
  constructor(
    private _router: Router,
    private _pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    // { ..."a"."ab"."abz".."ab"..."abc"} le ".." represente le temps d'ecart où l'utilisateur table ne 100ms
    // debounceTime: Permet d'eliminer les requetes asynchrone qui n'ont pas au moins n'ont au moins un certain nombre de milliseconde d'attente après
    // distinctUntilChanged: Pour eliminer les recherches qui sont successivement identique dans {....."ab"..."ab"....."ac"..."bc"..."ac"} on ne va garder que {....."ab"..."ac"..."bc"}
    // map: permet de transformer un flux en un autre forme de flux
    // SwitchMap : permet d'executer uniquement requete la plus recente que l'utilisateur a demander
    this.pokemons$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((itemSearch) =>
        this._pokemonService.searchPokemonList(itemSearch)
      )
    );
  }
  search(term: string) {
    // On a ajoute le terme de recherche de l'utilisateur à l'ensemble de groupe de recherche.
    this.searchTerms.next(term); // similaire à Array.push() mais pour les flux de données
    console.log(this.searchTerms);
  }
  goToDetail(pokemon: Pokemon) {
    const link = ['pokemon', pokemon.id];
    this._router.navigate(link);
  }
}
