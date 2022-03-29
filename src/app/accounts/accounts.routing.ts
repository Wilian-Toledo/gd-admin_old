import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountPasswordComponent } from './account-password/account-password.component';

const routes: Routes = [
    {
        path: '', component: AccountsComponent,
        children: [
            { path: '', component: AccountListComponent },
            { path: 'create', component: AccountCreateComponent },
            { path: ':id/change-password', component: AccountPasswordComponent },
            { path: ':id', component: AccountDetailComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountsRoutingModule { }
