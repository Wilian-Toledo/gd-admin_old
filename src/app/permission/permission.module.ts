import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionCreateComponent } from './permission-create/permission-create.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionDetailComponent } from './permission-detail/permission-detail.component';
import { PermissionRoutingModule } from './permission.routing';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { PermissionService } from './permission.service';
import { PermissionComponent } from './permission.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';


@NgModule({
  declarations: [
    PermissionCreateComponent,
    PermissionListComponent,
    PermissionDetailComponent,
    PermissionComponent
  ],
  imports: [
    CommonModule,
    PermissionRoutingModule,
    FormsModule,
    PipesModule,
    NgxPaginationModule,
    AutocompleteLibModule,
  ],
  providers: [
    PermissionService
  ]
})
export class PermissionModule { }
