import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {PokeListService} from '../../services/poke-list.service';
import {Pokemon} from '../../models/Pokemon';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {
  pokeList:Pokemon[] = [];

  constructor(private pokeListService: PokeListService, private http: HttpClient) { }

  getPokemons():void{
    this.pokeListService.getPokemons().then(data=>
      data.map(url=>{
        this.http.get(url).subscribe(data=>{
            this.pokeList = [...this.pokeList,
            {name: data['forms'][0].name.charAt(0).toUpperCase() + data['forms'][0].name.slice(1),
            type: data['types'][0].type.name,
            spriteUrl: data['sprites'].front_default
          }]
        })
      })
  );
  }

  ngOnInit() {
    this.getPokemons();
  }

}
