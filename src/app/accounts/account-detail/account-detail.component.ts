import { Component, OnInit } from '@angular/core';
import { AccountService } from '../accounts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  is_load: boolean = false;

  account: any = {};
  pagination: any = {
    page: 1,
    take: 10
  };

  companyId: "";

  constructor(
    private accountService: AccountService,
    private routeActive: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private companyService: CompanyService,
    private jwt:JwtauthService
  ) {
    this.companyId = jwt.CompanyCurrent();
   }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.accountService.get(this.routeActive.snapshot.params.id).subscribe(x => {
      this.account = x;
      this.is_load = true;
    });
  }

  save() {
    this.accountService.save(this.account).subscribe(x => {
      this.toast.success("Usuário atualizado com sucesso", "Sucesso");
      this.router.navigate(['accounts']);
    });
  }

  delete() {
    this.accountService.delete(this.account.id).subscribe(x => {
      this.toast.success("Usuário excluído com sucesso", "Sucesso");
      this.router.navigate(['accounts']);
    });
  }

  getPage(skipPage: number) {
		this.pagination.page = skipPage;
  }
}
