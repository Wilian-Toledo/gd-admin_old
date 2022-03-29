import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MasterMenuComponent } from './master/master-menu/master-menu.component';
import { MasterFooterComponent } from './master/master-footer/master-footer.component';
import { MasterHeaderComponent } from './master/master-header/master-header.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home/home.module';
import { AccountsModule } from './accounts/accounts.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/interceptor/interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { AuthService } from './shared/auth/auth.service';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { NgxWebstorageModule, SessionStorageService } from 'ngx-webstorage';
import { NgProgressHttpModule } from 'ngx-progressbar/http';
import { NgProgressModule } from 'ngx-progressbar';
import { CompanyModule } from './company/company.module';
import { AuthPermissionService } from './shared/auth/auth-permission.service';
import { PermissionModule } from './permission/permission.module';
import { ExtensionModule } from './extension/extension.module';
import { TrunkModule } from './trunk/trunk.module';
import { MailboxesModule } from './mailboxes/mailboxes.module';
import { BlacklistModule } from './blacklist/blacklist.module';
import { ConferencesModule } from './conferences/conferences.module';
import { BosssecretaryModule } from './bosssecretary/bosssecretary.module';
import { CostcenterModule } from './costcenter/costcenter.module';
import { RoleModule } from './role/role.module';
import { RinggroupsModule } from './ringgroups/ringgroups.module';
import { ModulesModule } from './modules/modules.module';

@NgModule({
  declarations: [
    AppComponent,
    MasterMenuComponent,
    MasterFooterComponent,
    MasterHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HomeModule,
    AccountsModule,
    HttpClientModule,
    LoginModule,
    CompanyModule,
    PermissionModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxWebstorageModule.forRoot({
      prefix: 'BSStorage',
      separator: '-',
      caseSensitive: true
    }),
    NgProgressModule.withConfig({
      spinner: false,
      spinnerPosition: 'left',
      color: '#222d32',
      thick: true
    }),
    NgProgressHttpModule,
    ExtensionModule,
    TrunkModule,
    MailboxesModule,
    BlacklistModule,
    ConferencesModule,
    BosssecretaryModule,
    CostcenterModule,
    RoleModule,
    RinggroupsModule,
    ModulesModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
      deps: [ToastrService, SessionStorageService, AuthService]
    }, AuthService, AuthGuardService, AuthPermissionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
