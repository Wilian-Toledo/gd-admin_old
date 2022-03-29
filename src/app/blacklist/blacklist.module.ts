import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlacklistComponent } from './blacklist.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { BlacklistRoutingModule } from './blacklist.routing';
import { BlacklistListComponent } from './blacklist-list/blacklist-list.component';
import { BlacklistCreateComponent } from './blacklist-create/blacklist-create.component';
import { BlacklistService } from './blacklist.service';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [BlacklistComponent, BlacklistListComponent, BlacklistCreateComponent],
  imports: [
    CommonModule,
    BlacklistRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    BlacklistService
  ]
})
export class BlacklistModule { }
