import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts.routing';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './accounts.service';
import { FormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { PipesModule } from '../shared/pipes/pipes.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AccountPasswordComponent } from './account-password/account-password.component';
import { NgSelectModule } from '@ng-select/ng-select';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [
    AccountCreateComponent,
    AccountsComponent,
    AccountListComponent,
    AccountDetailComponent,
    AccountPasswordComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountsModule { }
