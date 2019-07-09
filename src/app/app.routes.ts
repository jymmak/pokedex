import { Routes } from "@angular/router";
import { basicComponent } from "./components/common/layouts/basic.component";
import { blankComponent } from "./components/common/layouts/blank.component";
import { pokeListComponent } from './view/poke-list/poke-list.component';





export const ROUTES: Routes = [
 // Main redirect
  { path: '', redirectTo: 'poke-list', pathMatch: 'full' },

  //App views
  {
    path: '', component: basicComponent,
    children: [
      { path: 'poke-list', component: pokeListComponent },
    ]
  },
  

  // Handle all other routes
  { path: '**', component: pokeListComponent },
  { path: 'poke-list', component: pokeListComponent },


];






