import { Component, OnInit, Input} from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-poke-list-item',
  templateUrl: './poke-list-item.component.html',
  styleUrls: ['./poke-list-item.component.scss']
})
export class PokeListItemComponent implements OnInit {
  @Input() pokemonData:Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
