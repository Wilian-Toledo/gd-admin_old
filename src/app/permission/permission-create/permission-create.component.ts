import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/accounts/accounts.service';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-create',
  templateUrl: './permission-create.component.html',
  styleUrls: ['./permission-create.component.css']
})
export class PermissionCreateComponent implements OnInit {
  role: any = {
    employee: {},
    resources: []
  };

  companyId: string;

  keyword: string = "name";
  operations: any[] = ["View", "Insert", "Edit", "Remove", "All"];
  accountsEmployee: any = {};
  resources: any[] = [];
  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private companyService: CompanyService,
    private permissionService: PermissionService,
    private jwt: JwtauthService
  ) { 
    this.companyId = jwt.CompanyCurrent();

    this.permissionService.resources().subscribe(result => {
      this.resources = result;

      this.resources.forEach(item => {
        item.operations = {
          all:false,
          edit:false,
          remove:false,
          view:false,
          insert:false
        };
      });
    });
  }

  ngOnInit(): void {
    
  }

  getAccount(): void {
    this.companyService.employees(this.companyId).subscribe((response) => {
      this.accountsEmployee = response;
    });
  }

  setAccount(value: any): void {
    this.role.employee = {};
    this.role.employee.id = value.id;
  }

  public save() {
    this.role.resources = this.convertOperations();

    this.permissionService.save(this.role).subscribe(result => {
      this.toast.success("Salvo com sucesso!", "Sucesso");
    });
  }

  public convertOperations() {
    for (let item of this.resources) {
      let opr = [];

      if (item.operations.all)
        opr.push('All');
      if (item.operations.edit)
        opr.push('Edit');
      if (item.operations.insert)
        opr.push('Insert');
      if (item.operations.view)
        opr.push('View');
      if (item.operations.remove)
        opr.push('Remove');

      item.permission = opr.toString();
    }

    return this.resources.filter(x => x.permission !== "");
	}

}
