import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxesListComponent } from './mailboxes-list/mailboxes-list.component';
import { MailboxesCreateComponent } from './mailboxes-create/mailboxes-create.component';
import { MailboxesComponent } from './mailboxes.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';
import { PipesModule } from '../shared/pipes/pipes.module';
import { MailboxesRoutingModule } from './mailboxes.routing';

export let options: Partial<IConfig> | (() => Partial<IConfig>);

@NgModule({
  declarations: [MailboxesComponent, MailboxesListComponent, MailboxesCreateComponent],
  imports: [
    CommonModule,
    MailboxesRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(options),
    PipesModule,
    NgxPaginationModule,
    AngularMultiSelectModule,
    AutocompleteLibModule,
    NgSelectModule
  ]
})
export class MailboxesModule { }
