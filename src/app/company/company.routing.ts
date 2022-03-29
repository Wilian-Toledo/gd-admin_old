import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyAccountLinkComponent } from './company-account-link/company-account-link.component';

const routes: Routes = [
    {
        path: '', component: CompanyComponent,
        children: [
            { path: '', component: CompanyListComponent },
            { path: 'create', component: CompanyCreateComponent },
            { path: 'link', component: CompanyAccountLinkComponent },
            { path: ':id', component: CompanyCreateComponent },
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CompanyRoutingModule { }
