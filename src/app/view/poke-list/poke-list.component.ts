import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'poke-list',
    templateUrl: 'poke-list.template.html',
    providers: [

    ]
})

export class pokeListComponent implements OnInit {
    public spinner: boolean;
    public listaPokemon: Array<any>;
    constructor(private _router: Router) {
        this.spinner = false;
     }
    ngOnInit() {
    
		this.listaPokemon = [
			{
			
				title: "Shiba Inu",
				src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			
			},

			{
			
                title: "Shiba Inu",
				src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			},

			{
			
                title: "Shiba Inu",
				src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			},

			{
				
                title: "Shiba Inu",
				src: "https://material.angular.io/assets/img/examples/shiba2.jpg",
			},

			

		];
    }



}
