import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/accounts/accounts.service';
import { PermissionService } from '../permission.service';

@Component({
  selector: 'app-permission-list',
  templateUrl: './permission-list.component.html',
  styleUrls: ['./permission-list.component.css']
})
export class PermissionListComponent implements OnInit {
  filter: any = {
    skip: 0,
    take: 10
  };
  
  list: any;
  company: any = {};

  constructor(
    private permissionService: PermissionService,
    private toast: ToastrService,
  ) {
    this.search();
  }

  ngOnInit(): void {
  }

  search()
  {
    this.permissionService.byCompany().subscribe(x=> {
      this.list = x;
    });
  }
}
