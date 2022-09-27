import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesCreateComponent } from './modules-create/modules-create.component';
import { ModulesListComponent } from './modules-list/modules-list.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
    {
        path: '', component: ModulesComponent,
        children: [
            { path: '', component: ModulesListComponent },            
            { path: 'create', component: ModulesCreateComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule { }
