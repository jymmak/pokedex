import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
    selector: 'poke-list',
    templateUrl: 'poke-list.template.html',
    providers: [

    ]
})

export class pokeListComponent implements OnInit {
    public spinner: boolean;
    constructor(private _router: Router) {
        this.spinner = false;
     }
    ngOnInit() {
       
    }




}
