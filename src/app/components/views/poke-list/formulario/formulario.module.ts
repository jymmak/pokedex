import { NgModule } from "@angular/core";
import { FormularioDealersComponent } from "./formulario.component";

import { FormsModule } from '@angular/forms'; 
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [FormularioDealersComponent],
    imports: [SharedModule, FormsModule],
    exports: [FormularioDealersComponent]
})

export class FormularioModule { }
