import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'poke-list-item',
    templateUrl: 'poke-list-item.template.html',
    providers: [

    ]
})

export class pokeListItemComponent implements OnInit {
  
    constructor(private _router: Router) {
   
     }
    ngOnInit() {
       
    }


}
