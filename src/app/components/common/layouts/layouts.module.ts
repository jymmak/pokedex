import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {blankComponent} from "./blank.component";
import {basicComponent} from "./basic.component";
import { TopnavbarModule } from '../topnavbar/topnavbar.module';




@NgModule({
    declarations: [blankComponent, basicComponent],
    imports     : [BrowserModule, 
        RouterModule, 
        TopnavbarModule,
       ],
    exports: [blankComponent, basicComponent]
})

export class LayoutsModule {}
