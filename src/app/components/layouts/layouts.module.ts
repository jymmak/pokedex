import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {blankComponent} from "./blank.component";
import { HeaderModule } from '../views/header/header.module';
import { SharedModule } from '../../shared/shared.module';
import { PokeListModule } from '../views/poke-list/poke-list.module';



@NgModule({
    declarations: [blankComponent,
     ],
    imports     : [  BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
        PokeListModule,
        HeaderModule,
    ],
    exports     : [blankComponent]
})

export class LayoutsModule {}
