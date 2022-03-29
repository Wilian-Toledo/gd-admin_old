import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { AccountService } from 'src/app/accounts/accounts.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { Keys } from 'src/app/shared/models/keys';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-account-link',
  templateUrl: './company-account-link.component.html',
  styleUrls: ['./company-account-link.component.css']
})
export class CompanyAccountLinkComponent implements OnInit {
  keyword: string = "name";
  accountsEmployee: any[] = [];
  companyList: any[] = [];
  employeesList: any[] = [];
 
  accountLinkCompany: any = {
    employee: {},
    company: {}
    };

  constructor(
    private toast: ToastrService,
    private accountService: AccountService,
    private companyService: CompanyService,
    private router: Router,
    private jwt: JwtauthService
    ) {
      this.accountLinkCompany.company = {};
      this.accountLinkCompany.company.id = jwt.CompanyCurrent();

      this.loadAccount(this.accountLinkCompany.company.id);
     }

  ngOnInit(): void {
  }

  getAccount(term: any): void {
    if (term && term.length >= 2) {
      this.accountService.getByTerm(term).subscribe((response) => {
          this.accountsEmployee = response;
      });
    }
  }

  setAccount(value: any): void {
    this.accountLinkCompany.employee = {};
    this.accountLinkCompany.employee.id = value.id;
  }

  loadAccount(id: string) {
    this.companyService.employees(id).subscribe(x => {
      if (x.employees)
        this.employeesList = x.employees;
    });
  }

  save() {
    if (!this.valid())
      return;

    this.companyService.link(this.accountLinkCompany.company.id, this.accountLinkCompany.employee.id).subscribe(x => {
      this.toast.success("Vinculo da empresa com o funcionário feito com sucesso", "Sucesso");
      
      this.loadAccount(this.accountLinkCompany.company.id);
    });
  }

  delete(employeeId: string) {
    this.companyService.unLink(this.accountLinkCompany.company.id, employeeId).subscribe(x => {
      this.toast.success("Vinculo da empresa com o funcionário apagado com sucesso", "Sucesso");
      
      this.loadAccount(this.accountLinkCompany.company.id);
    });
  }

  valid() {
    if (!this.accountLinkCompany.employee.id) {
      this.toast.warning('Funcionário não foi preenchido!', 'Atenção');
      return false;
    }

    if (!this.accountLinkCompany.company.id) {
      this.toast.warning('Empresa não foi preenchido!', 'Atenção');
      return false;
    }

    return true;
  }
}
