import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var jQuery:any;


@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.template.html'
})
export class TopnavbarComponent {
    constructor(private router: Router) { }
  

}
