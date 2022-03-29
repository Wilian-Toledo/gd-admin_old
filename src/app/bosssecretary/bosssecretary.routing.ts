import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BosssecretaryCreateComponent } from './bosssecretary-create/bosssecretary-create.component';
import { BosssecretaryListComponent } from './bosssecretary-list/bosssecretary-list.component';
import { BosssecretaryComponent } from './bosssecretary.component';

const routes: Routes = [
    {
        path: '', component: BosssecretaryComponent,
        children: [
            { path: '', component: BosssecretaryListComponent },
            { path: 'create', component: BosssecretaryCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BosssecretaryRoutingModule { }
