import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { pokeListComponent } from "./poke-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [pokeListComponent],
    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
})

export class pokeListModule { }
