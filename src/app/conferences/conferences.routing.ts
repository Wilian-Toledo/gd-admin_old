import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConferencesCreateComponent } from './conferences-create/conferences-create.component';
import { ConferencesListComponent } from './conferences-list/conferences-list.component';
import { ConferencesComponent } from './conferences.component';

const routes: Routes = [
    {
        path: '', component: ConferencesComponent,
        children: [
            { path: '', component: ConferencesListComponent },
            { path: 'create', component: ConferencesCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConferencesRoutingModule { }
