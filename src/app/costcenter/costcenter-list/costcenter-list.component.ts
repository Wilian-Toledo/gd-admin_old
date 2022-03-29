import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { CostcenterService } from '../costcenter.service';

@Component({
  selector: 'app-costcenter-list',
  templateUrl: './costcenter-list.component.html',
  styleUrls: ['./costcenter-list.component.css']
})
export class CostcenterListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  costcenter: any;
  companyId: any = {};

  constructor(
    private costcenterService: CostcenterService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listCostcenter();
  }
  
  ngOnInit(): void {
  }
 
  listCostcenter()
  {
    this.costcenterService.all().subscribe(x=> {
      this.costcenter = x;
    });
  }
}