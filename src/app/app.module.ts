import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.routes";
import { pokeListModule } from './view/poke-list/poke-list.module';
import { LayoutsModule } from './components/common/layouts/layouts.module';
import { AppComponent } from './app.component';
import { MaterialModule } from "./material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // Views

    pokeListModule,

    // Modules
    LayoutsModule,
    //HttpClientModule,
    RouterModule.forRoot(ROUTES, {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
