import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SearchPipe } from './pipes/search.pipe';
import { TypeFilterPipe } from './pipes/typeFilter.pipe';
import { AbilitiesFilterPipe } from './pipes/abilitiesFilter.pipe';
import {HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { PokeListComponent } from './components/poke-list/poke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PokeListComponent,
    HeaderComponent,
    SearchPipe,
    TypeFilterPipe,
    AbilitiesFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
