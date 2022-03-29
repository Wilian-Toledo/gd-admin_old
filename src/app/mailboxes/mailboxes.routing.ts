import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailboxesCreateComponent } from './mailboxes-create/mailboxes-create.component';
import { MailboxesListComponent } from './mailboxes-list/mailboxes-list.component';
import { MailboxesComponent } from './mailboxes.component';

const routes: Routes = [
    {
        path: '', component: MailboxesComponent,
        children: [
            { path: '', component: MailboxesListComponent },
            { path: 'create', component: MailboxesCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MailboxesRoutingModule { }
