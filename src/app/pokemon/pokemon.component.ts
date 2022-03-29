import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  name!: string;
  urlImage!: string;
  pokemones = null;
  pokemon: any = {};

  constructor(private _pokemonService: PokemonService) {
    this._pokemonService.getAllPokemon().subscribe((res:any) => {
      this.pokemones = res.results;
    });
   }

  ngOnInit(): void {
  }

  search(){
    this._pokemonService.getPokemon(this.name).subscribe((data:any) => {
      this.urlImage = data.sprites.front_default;
    });
  }

  listar(){
    this._pokemonService.getAllPokemon().subscribe((res:any) => {
      this.pokemones = res.results;
    });
  }

  obtenerInfo(url: string){
    this._pokemonService.getInfo(url).subscribe((res:any) => {
      this.pokemon = res;
    });
  }

}
