import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SessionStorageService } from "ngx-webstorage";
import { Keys } from "../models/keys";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthPermissionService {

	constructor(
        private http: HttpClient,
		private authService: AuthService,
		private sessionStorageService: SessionStorageService) {
    }
    
    public getCurrentPermission(internalCode: string): any {
		let role = this.sessionStorageService.retrieve(Keys.StoragesResource);
		let currentPermission: any = null;
		if (role) {

			currentPermission = {
				All: false,
				Edit: false,
				Remove: false,
				View: false,
				Insert: false
			};

			role.forEach(resource => {
                if (typeof(resource.internal_code) != 'undefined' && resource.internal_code.toLowerCase() == internalCode.toLowerCase()) {
                    let array_operations = resource.permission.replace(/ /g, "").split(",");

                    if (!currentPermission.All)
                        currentPermission.All = array_operations.includes("All");

                    if (!currentPermission.Edit)
                        currentPermission.Edit = array_operations.includes("Edit");

                    if (!currentPermission.Remove)
                        currentPermission.Remove = array_operations.includes("Remove");

                    if (!currentPermission.View)
                        currentPermission.View = array_operations.includes("View");

                    if (!currentPermission.Insert)
                        currentPermission.Insert = array_operations.includes("Insert");
				}
			});
        }

        return currentPermission;
    }

    public changeCompany(companyId: string) {
        this.http.get(`/login/transfer/${companyId}`).subscribe(token => {
            this.authService.setCompanyToken(token);
        });
    }
}
