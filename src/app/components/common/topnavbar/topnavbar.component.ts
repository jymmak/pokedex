import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery:any;


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent implements OnInit {
    constructor(private router: Router) { }
    public title:string;
    
    ngOnInit() {

        this.title = "Pokedex";
     

    }
}
