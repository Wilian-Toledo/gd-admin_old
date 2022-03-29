import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrunkCreateComponent } from './trunk-create/trunk-create.component';
import { TrunkListComponent } from './trunk-list/trunk-list.component';
import { TrunkComponent } from './trunk.component';

const routes: Routes = [
    {
        path: '', component: TrunkComponent,
        children: [
            { path: '', component: TrunkListComponent },
            { path: 'create', component: TrunkCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TrunkRoutingModule { }
