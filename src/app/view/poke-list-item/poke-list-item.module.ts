import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MaterialModule} from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { pokeListItemComponent } from './poke-list-item.component';

@NgModule({
    declarations: [pokeListItemComponent],
    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule
    ],
})

export class pokeListItemModule { }
