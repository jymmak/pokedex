import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PokeListComponent} from './poke-list.component';


const routes = [
  {
    path: ':id',
    component: PokeListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: []
})
export class PokeListRoutingModule { }
