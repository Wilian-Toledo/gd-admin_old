import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/accounts/accounts.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email: string = "";
  constructor(
    private accountService: AccountService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  public forget() {
    this.accountService.forgot(this.email).subscribe(x => {
      this.toast.success("Enviado um e-mail para recuperação de senha!");
    });
  }

}
