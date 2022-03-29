import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RinggroupsCreateComponent } from './ringgroups-create/ringgroups-create.component';
import { RinggroupsListComponent } from './ringgroups-list/ringgroups-list.component';
import { RinggroupsComponent } from './ringgroups.component';

const routes: Routes = [
    {
        path: '', component: RinggroupsComponent,
        children: [
            { path: '', component: RinggroupsListComponent },
            { path: 'create', component: RinggroupsCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RinggroupsRoutingModule { }
