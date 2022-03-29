import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BosssecretaryComponent } from './bosssecretary.component';
import { BosssecretaryListComponent } from './bosssecretary-list/bosssecretary-list.component';
import { BosssecretaryCreateComponent } from './bosssecretary-create/bosssecretary-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { BosssecretaryRoutingModule } from './bosssecretary.routing';
import { BosssecretaryService } from './bosssecretary.service';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [BosssecretaryComponent, BosssecretaryListComponent, BosssecretaryCreateComponent],
  imports: [
    CommonModule,
    BosssecretaryRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    BosssecretaryService
  ]
})
export class BosssecretaryModule { }
