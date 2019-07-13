import { Component } from '@angular/core';
import { Results } from 'src/app/interfaces';

declare var jQuery:any;

@Component({
    selector: 'blank',
    templateUrl: 'blank.template.html'
})
export class blankComponent {
    public search: string;
    public typeFilter: string;
    public pokemons: Array<Results>;
    public abilityFilter: Array<string>;
  
    /**
     *  Called when search input changes
     */
    newPokemonSearch(search: string): void {
      if (this.search !== search) {
        this.search = search;
      }
    }
  
    /**
     * Called when header type selection changes
     */
    newTypeSelected(filter: string): void {
      if (this.typeFilter !== filter) {
        this.typeFilter = filter;
      }
    }
  
    /**
     * Called when header ability selection changes
     */
    newAbilitiesSelected(abilities: Array<string>): void {
      if (this.abilityFilter !== abilities) {
        this.abilityFilter = abilities;
      }
    }
  
    /**
     * Called when homepage emits pokemons
     */
    exportPokemons(pokemons: Array<Results>): void {
      if (this.pokemons !== pokemons) {
        this.pokemons = pokemons;
      }
    }
   
}