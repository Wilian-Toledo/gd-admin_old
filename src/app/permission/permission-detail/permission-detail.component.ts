import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/accounts/accounts.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-detail',
  templateUrl: './permission-detail.component.html',
  styleUrls: ['./permission-detail.component.css']
})
export class PermissionDetailComponent implements OnInit {
  isLoad: boolean = false;
  role: any = {
    employee: {},
    resources: []
  };

  constructor(
    private toast: ToastrService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private permissionService: PermissionService

  ) { 
  }

  ngOnInit(): void {
    this.getRole();
  }

  getRole() {
    if (this.route.snapshot.params.id) {
      this.permissionService.get(this.route.snapshot.params.id).subscribe((response) => {
				this.role = response;

        this.role.resources.forEach(item => {
					let array_resource_operations = item.permission.replace(/ /g, "").split(",");
					let op = {
						all: array_resource_operations.includes("All"),
						edit: array_resource_operations.includes("Edit"),
						remove: array_resource_operations.includes("Remove"),
						view: array_resource_operations.includes("View"),
						insert: array_resource_operations.includes("Insert")
					};

					item.operations = op;
				});

        this.isLoad = true;
      });
    }
    else {
      this.isLoad = true;
    }
  }

  public save() {
    this.role.resources = this.convertOperations();

    this.permissionService.save(this.role).subscribe(result => {
      this.toast.success("Salvo com sucesso!", "Sucesso");
    });
  }

  public convertOperations() {
    for (let item of this.role.resources) {
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

    return this.role.resources;
	}

}
