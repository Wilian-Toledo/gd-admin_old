import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RinggroupsComponent } from './ringgroups.component';
import { RinggroupsListComponent } from './ringgroups-list/ringgroups-list.component';
import { RinggroupsCreateComponent } from './ringgroups-create/ringgroups-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { RinggroupsRoutingModule } from './ringgroups.routing';
import { RinggroupsService } from './ringgroups.service';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [RinggroupsComponent, RinggroupsListComponent, RinggroupsCreateComponent],
  imports: [
    CommonModule,
    RinggroupsRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    RinggroupsService
  ]
})
export class RinggroupsModule { }
