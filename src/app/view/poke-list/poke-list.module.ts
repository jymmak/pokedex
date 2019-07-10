import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { pokeListComponent } from "./poke-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SpinnerModule } from 'src/app/components/common/spinner/spinner.module';
import {MaterialModule} from "../../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    declarations: [pokeListComponent],
    imports: [BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        SpinnerModule,
        MaterialModule,
        FlexLayoutModule
    ],
})

export class pokeListModule { }
