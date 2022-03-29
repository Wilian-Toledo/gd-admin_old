import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { RinggroupsService } from '../ringgroups.service';

@Component({
  selector: 'app-ringgroups-list',
  templateUrl: './ringgroups-list.component.html',
  styleUrls: ['./ringgroups-list.component.css']
})
export class RinggroupsListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  ringgroups: any;
  companyId: any = {};

  constructor(
    private ringgroupsService: RinggroupsService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listRinggroups();
  }
  
  ngOnInit(): void {
  }
 
  listRinggroups()
  {
    this.ringgroupsService.all().subscribe(x=> {
      this.ringgroups = x;
      console.log(x);
    });
  }
}
