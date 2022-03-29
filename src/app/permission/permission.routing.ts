import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionCreateComponent } from './permission-create/permission-create.component';
import { PermissionDetailComponent } from './permission-detail/permission-detail.component';
import { PermissionListComponent } from './permission-list/permission-list.component';
import { PermissionComponent } from './permission.component';

const routes: Routes = [
    {
        path: '', component: PermissionComponent,
        children: [
            { path: '', component: PermissionListComponent },
            { path: 'create', component: PermissionCreateComponent },
            { path: ':id', component: PermissionDetailComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PermissionRoutingModule { }
