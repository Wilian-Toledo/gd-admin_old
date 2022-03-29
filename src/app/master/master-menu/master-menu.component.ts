import { Component, OnInit, AfterContentInit, AfterContentChecked } from '@angular/core';
import { AuthPermissionService } from 'src/app/shared/auth/auth-permission.service';
import { Keys } from 'src/app/shared/models/keys';

@Component({
	selector: 'app-master-menu',
	templateUrl: './master-menu.component.html'
})
export class MasterMenuComponent implements OnInit, AfterContentChecked {
	isLoad: boolean = false;
	currentPermission: any = {
		User:{},
		Company:{},
		Permission: {}
	};

	constructor(private authPermissionService: AuthPermissionService ) {
		this.currentPermission.User = this.authPermissionService.getCurrentPermission(Keys.UserModule);
		this.currentPermission.Company = this.authPermissionService.getCurrentPermission(Keys.CompanyModule);
		this.currentPermission.Permission = this.authPermissionService.getCurrentPermission(Keys.PermissionModule);
	}

	ngOnInit() {
	}

	ngAfterContentChecked(){
		this.isLoad = true;
	}
}
