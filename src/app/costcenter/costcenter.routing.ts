import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostcenterCreateComponent } from './costcenter-create/costcenter-create.component';
import { CostcenterListComponent } from './costcenter-list/costcenter-list.component';
import { CostcenterComponent } from './costcenter.component';

const routes: Routes = [
    {
        path: '', component: CostcenterComponent,
        children: [
            { path: '', component: CostcenterListComponent },
            { path: 'create', component: CostcenterCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CostcenterRoutingModule { }
