import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company/company.service';
import { SessionStorageService } from 'ngx-webstorage';
import { Keys } from 'src/app/shared/models/keys';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {
  account: any = {
    type: "1",
  };
  
  company: any = {};

  constructor(
    private accountService: AccountService,
    private companyService: CompanyService,
    private toast: ToastrService,
    private router: Router,
		private jwt: JwtauthService
  ) {
    this.company = this.jwt.CompanyCurrent();
  }

  ngOnInit(): void {
  }

  save() {
    if (!this.valid())
      return;

    this.accountService.save(this.account).subscribe(employee => {
      this.companyService.link(this.company, employee.id).subscribe(x => {
        this.toast.success('Usuário salvo com sucesso!', 'Sucesso');
        this.router.navigate(['accounts']);
      });
    });
  }

  valid()
  {
    if ((!this.account.name || this.account.name == "") &&
      (!this.account.login || this.account.login == "") &&
      (!this.account.email || this.account.email == "") && 
      (!this.account.password || this.account.password == "")
    ) {
      this.toast.warning('Nome não foi preenchido!', 'Atenção');
      return false;
    }

    return true;
  }
}
