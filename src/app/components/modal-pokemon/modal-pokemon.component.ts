import { Component, OnInit, Input} from '@angular/core';
import { Pokemon } from '../../models/Pokemon';

@Component({
  selector: 'app-modal-pokemon',
  templateUrl: './modal-pokemon.component.html',
  styleUrls: ['./modal-pokemon.component.scss']
})
export class ModalPokemonComponent implements OnInit {
  // @Input() pokemonData:Pokemon;
  constructor() { }

  ngOnInit() {
  }

}
