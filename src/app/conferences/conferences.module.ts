import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferencesComponent } from './conferences.component';
import { ConferencesListComponent } from './conferences-list/conferences-list.component';
import { ConferencesCreateComponent } from './conferences-create/conferences-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { ConferencesRoutingModule } from './conferences.routing';
import { ConferencesService } from './conferences.service';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [ConferencesComponent, ConferencesListComponent, ConferencesCreateComponent],
  imports: [
    CommonModule,
    ConferencesRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    ConferencesService
  ]
})
export class ConferencesModule { }
