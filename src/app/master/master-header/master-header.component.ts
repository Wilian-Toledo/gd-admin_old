import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';
import { AuthPermissionService } from 'src/app/shared/auth/auth-permission.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { Keys } from 'src/app/shared/models/keys';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-master-header',
	templateUrl: './master-header.component.html'
})
export class MasterHeaderComponent implements OnInit, AfterContentInit {
	companies: any[] = [];
	company: string;
	account: string;

	constructor(
		private authService: AuthService,
		private sessionStorageService: SessionStorageService,
		private authPermissionService: AuthPermissionService,
		private jwt: JwtauthService
	) {
		this.companies = this.sessionStorageService.retrieve(Keys.StoragesCompany);
		this.company = jwt.CompanyCurrent();
		this.account = jwt.AccountCurrent();
	}

	public ngOnInit() {
	}

	public ngAfterContentInit() {
	}

	public logout() {
		this.authService.logout();
	}

	public selectCompany() {
		this.authPermissionService.changeCompany(this.company);
	}
}
