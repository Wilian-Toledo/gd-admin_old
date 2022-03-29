import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { ConferencesService } from '../conferences.service';

@Component({
  selector: 'app-conferences-list',
  templateUrl: './conferences-list.component.html',
  styleUrls: ['./conferences-list.component.css']
})
export class ConferencesListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  conferences: any;
  companyId: any = {};

  constructor(
    private conferencesService: ConferencesService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listConferences();
  }
  
  ngOnInit(): void {
  }
 
  listConferences()
  {
    this.conferencesService.all().subscribe(x=> {
      this.conferences = x;
      console.log(x)
    });
  }
}
