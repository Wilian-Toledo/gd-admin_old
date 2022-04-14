import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { MailboxesService } from '../mailboxes.service';

@Component({
  selector: 'app-mailboxes-create',
  templateUrl: './mailboxes-create.component.html',
  styleUrls: ['./mailboxes-create.component.css']
})
export class MailboxesCreateComponent implements OnInit {
  is_load: boolean = false;

  mailboxes: any = {};
  constructor(
    private mailboxesService: MailboxesService,
    private routeActive: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private companyService: CompanyService,
    private jwt:JwtauthService
  ) {
    this.load();
   }

   load() {
    if (this.routeActive.snapshot.params.id) {
        this.mailboxesService.get(this.routeActive.snapshot.params.id).subscribe((x) => {
            this.mailboxes = x;
            this.is_load = true;
        });
    }
    else
    {
        this.is_load = true;
    }
}

  ngOnInit(): void {
  }

  save() {
    this.mailboxesService.save(this.mailboxes).subscribe(x => {
      this.toast.success("Mailbox salvo com sucesso", "Sucesso");
      this.router.navigate(['mailboxes']);
    });
  }

  delete() {
    this.mailboxesService.delete(this.mailboxes.id).subscribe(x => {
      this.toast.success("Mailbox excluído com sucesso", "Sucesso");
      this.router.navigate(['mailboxes']);
    });
  }

}
