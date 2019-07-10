import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PokeListItemRoutingModule } from './poke-list-item-routing.module';
import { PokeListItemComponent } from './poke-list-item.component';



@NgModule({
  imports: [
    CommonModule,
    PokeListItemRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [PokeListItemComponent]
})
export class PokeListItemModule { }
