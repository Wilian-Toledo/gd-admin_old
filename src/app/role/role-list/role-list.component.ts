import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  role: any;
  companyId: any = {};

  constructor(
    private roleService: RoleService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listRole();
  }
  
  ngOnInit(): void {
  }
 
  listRole()
  {
    this.roleService.all().subscribe(x=> {
      this.role = x;
    });
  }
}