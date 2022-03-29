import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModulesCreateComponent } from './modules-create/modules-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ModulesRoutingModule } from './modules.routing';
import { ModulesService } from './modules.service';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [ModulesComponent, ModulesListComponent, ModulesCreateComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    ModulesService
  ]
})
export class ModulesModule { }
