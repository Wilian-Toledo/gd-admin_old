import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { BosssecretaryService } from '../bosssecretary.service';

@Component({
  selector: 'app-bosssecretary-list',
  templateUrl: './bosssecretary-list.component.html',
  styleUrls: ['./bosssecretary-list.component.css']
})
export class BosssecretaryListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };

  bosssecretary: any;


  constructor(
    private bosssecretaryService: BosssecretaryService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listBosssecretary();
   }

  ngOnInit(): void {
  }

  listBosssecretary(){
    this.bosssecretaryService.all().subscribe(x=>{
      this.bosssecretary = 0;
      console.log(x);
    });
  }
}
