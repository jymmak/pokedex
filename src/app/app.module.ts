import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';;
import { RouterModule } from '@angular/router';
import { ROUTES } from "./app.routes";
import { LayoutsModule } from './components/layouts/layouts.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    FormsModule,

   LayoutsModule,

    BrowserAnimationsModule,
    
    RouterModule.forRoot(ROUTES, {
      useHash: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
