import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Results } from 'src/app/interfaces';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchChange = new EventEmitter();
  @Output() typeSelected = new EventEmitter();
  @Output() abilitiesSelected = new EventEmitter();

  abilities: Array<string>;
  types: Array<string>;
  pokemonList: Array<Results>;
  search: string;


  @Input() set pokemons(pokemons: Results[]) {
    if (pokemons !== this.pokemonList) {
      this.pokemonList = pokemons;

   
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.abilities = [];
    this.types = [];
  }

  /**
   * Called when a search field is updated
   */
  searchEvent(search): void {
    // check for cleared search
    if (search === '') {
      this.search = search;
    }
    this.searchChange.emit(this.search);
  }



}
