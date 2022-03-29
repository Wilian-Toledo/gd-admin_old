import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './login/forgot/forgot.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
        canActivate: [AuthGuardService]
    },
    { 
        path: 'forgot',
        component: ForgotComponent,
        pathMatch:"full" },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'accounts',
        loadChildren: './accounts/accounts.module#AccountsModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'company',
        loadChildren: './company/company.module#CompanyModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'permission',
        loadChildren: './permission/permission.module#PermissionModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'extension',
        loadChildren: './extension/extension.module#ExtensionModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'trunk',
        loadChildren: './trunk/trunk.module#TrunkModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'mailboxes',
        loadChildren: './mailboxes/mailboxes.module#MailboxesModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'blacklist',
        loadChildren: './blacklist/blacklist.module#BlacklistModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'conferences',
        loadChildren: './conferences/conferences.module#ConferencesModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'bosssecretary',
        loadChildren: './bosssecretary/bosssecretary.module#BosssecretaryModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'costcenter',
        loadChildren: './costcenter/costcenter.module#CostcenterModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'role',
        loadChildren: './role/role.module#RoleModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'ringgroups',
        loadChildren: './ringgroups/ringgroups.module#RinggroupsModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'modules',
        loadChildren: './modules/modules.module#ModulesModule',
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }
