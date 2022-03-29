import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Keys } from 'src/app/shared/models/keys';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  accounts: any;
  companyId: any = {};

  constructor(
    private accountService: AccountService,
    private companyService: CompanyService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.companyId = this.jwt.CompanyCurrent();
    this.listEmployees();
  }
  
  ngOnInit(): void {
  }

  listEmployees()
  {
    this.companyService.employees(this.companyId).subscribe(x=> {
      this.accounts = x.employees;
    });
  }
}
