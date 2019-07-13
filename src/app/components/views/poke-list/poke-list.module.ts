import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokeListComponent } from './poke-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AbilitiesFilterPipe } from 'src/app/pipes/abilitiesFilter.pipe';
import { TypeFilterPipe } from 'src/app/pipes/typeFilter.pipe';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormularioModule } from './formulario/formulario.module';

@NgModule({
    declarations: [
        PokeListComponent, SearchPipe,
        TypeFilterPipe,
        AbilitiesFilterPipe
    ],


    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
        FormularioModule,
    ],
    exports: [PokeListComponent]
})

export class PokeListModule { }