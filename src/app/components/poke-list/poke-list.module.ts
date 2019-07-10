import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PokeListRoutingModule} from './poke-list-routing.module';
import { PokeListComponent } from './poke-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    PokeListRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [PokeListComponent]
})
export class PokeListModule { }
