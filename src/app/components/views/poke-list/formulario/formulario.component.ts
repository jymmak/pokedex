import { Component } from '@angular/core';

declare var $: any;

@Component({
    selector: 'formulario-dealers',
    templateUrl: 'formulario.template.html'
})
export class FormularioDealersComponent {
    constructor() {

    }
    Look() {
        $("#modal-pokemon").modal("hide");
    }
}
