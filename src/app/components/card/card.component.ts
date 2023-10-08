import { Component } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  typeToBackgroundColor: any = {
    normal: 'lightgray',
    fire: 'red',
    water: 'blue',
    electric: 'yellow',
    grass: 'green',
    ice: 'lightblue',
    fighting: 'orange',
    poison: 'purple',
    ground: 'burlywood',
    flying: 'skyblue',
    psychic: 'pink',
    bug: 'greenyellow',
    rock: 'sienna',
    ghost: 'darkslategray',
    steel: 'dimgrey',
    dragon: 'darkorange',
    dark: 'darkred',
    fairy: 'pink'
  };

  pokemon: PokemonData;

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    };
  }

  ngOnInit(): void {
    this.getPokemon('bulbasaur');
  }

  getPokemon(event: any) {

    const searchName = (event.target && event.target.value) ;
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          };
        },
        error: (err) => console.log('Not found')
      }
    );
  }

  getTypeBackgroundClasses(): string[] {
    if (this.pokemon.types && this.pokemon.types.length > 0) {
      const typeClasses: string[] = [];
      for (let i = 0; i < this.pokemon.types.length; i++) {
        const type = this.pokemon.types[i].type.name;
        typeClasses.push(`${type}-background`);
      }
      return typeClasses;
    }
    return ['white-background'];
  }

}
