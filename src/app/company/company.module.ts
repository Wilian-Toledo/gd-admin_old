import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyRoutingModule } from './company.routing';
import { FormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { PipesModule } from '../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { CompanyService } from './company.service';
import { CompanyComponent } from './company.component';
import { CompanyAccountLinkComponent } from './company-account-link/company-account-link.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgSelectModule } from '@ng-select/ng-select';


export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    CompanyCreateComponent, 
    CompanyListComponent, 
    CompanyComponent,
    CompanyAccountLinkComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AutocompleteLibModule,
    AngularMultiSelectModule,
    SweetAlert2Module.forRoot(),
    NgSelectModule,
  ],
  providers: [
    CompanyService
  ]
})
export class CompanyModule { }
