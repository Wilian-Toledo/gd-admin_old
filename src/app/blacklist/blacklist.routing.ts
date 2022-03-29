import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlacklistCreateComponent } from "./blacklist-create/blacklist-create.component";
import { BlacklistListComponent } from "./blacklist-list/blacklist-list.component";
import { BlacklistComponent } from "./blacklist.component";

const routes: Routes = [
    {
        path: '', component: BlacklistComponent,
        children: [
            { path: '', component: BlacklistListComponent },
            { path: 'create', component: BlacklistCreateComponent },                 
        ]
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BlacklistRoutingModule { }
