import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from './header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [HeaderComponent],
    imports: [BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        SharedModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    exports: [HeaderComponent]
})

export class HeaderModule { }