import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtensionCreateComponent } from './extension-create/extension-create.component';
import { ExtensionDetailComponent } from './extension-detail/extension-detail.component';
import { ExtensionListComponent } from './extension-list/extension-list.component';
import { ExtensionComponent } from './extension.component';

const routes: Routes = [
    {
        path: '', component: ExtensionComponent,
        children: [
            { path: '', component: ExtensionListComponent },
            { path: 'create', component: ExtensionCreateComponent },
            { path: ':id', component: ExtensionDetailComponent }
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExtensionRoutingModule { }
