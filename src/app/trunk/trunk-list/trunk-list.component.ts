import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { TrunkService } from '../trunk.service';

@Component({
  selector: 'app-trunk-list',
  templateUrl: './trunk-list.component.html',
  styleUrls: ['./trunk-list.component.css']
})
export class TrunkListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  trunk: any;
  companyId: any = {};

  constructor(
    private trunkService: TrunkService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listTrunk();
  }
  
  ngOnInit(): void {
  }
 
  listTrunk()
  {
    this.trunkService.all().subscribe(x=> {
      this.trunk = x;
      console.log(x);
    });
  }
}
