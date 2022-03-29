import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.css']
})
export class AccountPasswordComponent implements OnInit {
  account: any = {};

  constructor(
    private accountService: AccountService,
    private toast: ToastrService,
    private router: Router,
		private jwt: JwtauthService
  ) {
  }

  ngOnInit(): void {
  }

  save() {
    if (!this.valid())
      return;

    this.accountService.changePassword(this.account).subscribe(x => {
      this.toast.success('Usuário salvo com sucesso!', 'Sucesso');
      this.router.navigate(['accounts']);
    });
  }

  valid()
  {
    if ((!this.account.confirm_password || this.account.confirm_password == "") &&
      (!this.account.new_password || this.account.new_password == "") &&
      (!this.account.password || this.account.password == "")
    ) {
      this.toast.warning('Campos não foi preenchido!', 'Atenção');
      return false;
    }

    if (this.account.confirm_password != this.account.new_password) {
      this.toast.warning('Nova senha não corresponde com a confirmação!', 'Atenção');
      return false;
    }

    return true;
  }

}
