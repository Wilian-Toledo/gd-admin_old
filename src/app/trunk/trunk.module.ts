import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrunkComponent } from './trunk.component';
import { TrunkListComponent } from './trunk-list/trunk-list.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { TrunkRoutingModule } from './trunk.routing';
import { TrunkService } from './trunk.service';
import { TrunkCreateComponent } from './trunk-create/trunk-create.component';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [TrunkComponent, TrunkListComponent, TrunkCreateComponent],
  imports: [
    CommonModule,
    TrunkRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    TrunkService
  ]
})
export class TrunkModule { }
