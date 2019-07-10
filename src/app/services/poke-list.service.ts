import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { HttpClient }    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeListService {
  pokeList = []

  constructor(private http: HttpClient) { 
  
  }
   async getPokemons(){
    let urlList:string[] = [];
    let data = await this.http.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=200').toPromise();
    data['results'].map(el=>{
      urlList = [...urlList,el.url];
    })
    return urlList;
  }
}
