import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { MailboxesService } from '../mailboxes.service';

@Component({
  selector: 'app-mailboxes-list',
  templateUrl: './mailboxes-list.component.html',
  styleUrls: ['./mailboxes-list.component.css']
})
export class MailboxesListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  mailboxes: any;
  companyId: any = {};

  constructor(
    private mailboxesService: MailboxesService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listMailboxes();
  }
  
  ngOnInit(): void {
  }
 
  listMailboxes()
  {
    this.mailboxesService.all().subscribe(x=> {
      this.mailboxes = x;
      
    });
  }
}