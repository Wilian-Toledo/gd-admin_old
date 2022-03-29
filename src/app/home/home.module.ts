import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        ChartsModule
    ], 
    declarations: [HomeComponent]
})
export class HomeModule { }
