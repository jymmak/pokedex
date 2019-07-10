// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [ {
  path: '',
  loadChildren: './components/poke-list/PokeListModule#PokeListModule'
},
{
  path: 'detail',
  loadChildren: './components/poke-list-item/PokeListItemModule#PokeListItemModule '
},
{
  path: '**',
  redirectTo: ''
}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
