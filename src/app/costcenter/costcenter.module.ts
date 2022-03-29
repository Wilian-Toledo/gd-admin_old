import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostcenterComponent } from './costcenter.component';
import { CostcenterListComponent } from './costcenter-list/costcenter-list.component';
import { CostcenterCreateComponent } from './costcenter-create/costcenter-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { CostcenterRoutingModule } from './costcenter.routing';
import { CostcenterService } from './costcenter.service';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [CostcenterComponent, CostcenterListComponent, CostcenterCreateComponent],
  imports: [
    CommonModule,
    CostcenterRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    CostcenterService
  ]
})
export class CostcenterModule { }
