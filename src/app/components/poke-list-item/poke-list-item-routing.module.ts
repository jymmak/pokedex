import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PokeListItemComponent } from './poke-list-item.component';



const routes = [
  {
    path: ':id',
    component: PokeListItemComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class PokeListItemRoutingModule { }
