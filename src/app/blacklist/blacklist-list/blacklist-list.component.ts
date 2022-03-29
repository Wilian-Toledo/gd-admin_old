import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { BlacklistService } from '../blacklist.service';

@Component({
  selector: 'app-blacklist-list',
  templateUrl: './blacklist-list.component.html',
  styleUrls: ['./blacklist-list.component.css']
})
export class BlacklistListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  blacklist: any;
  companyId: any = {};

  constructor(
    private blacklistService: BlacklistService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listBlacklist();
  }
  
  ngOnInit(): void {
  }
 
  listBlacklist()
  {
    this.blacklistService.all().subscribe(x=> {
      this.blacklist = x;
      
    });
  }
}
