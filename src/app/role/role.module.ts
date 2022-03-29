import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { RoleRoutingModule } from './role.routing';
import { RoleService } from './role.service';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [RoleComponent, RoleListComponent, RoleCreateComponent],
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    RoleService
  ]
})
export class RoleModule { }
