import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { ModulesService } from '../modules.service';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.component.html',
  styleUrls: ['./modules-list.component.css']
})
export class ModulesListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  modules: any;
  companyId: any = {};

  constructor(
    private modulesService: ModulesService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listModules();
  }
  
  ngOnInit(): void {
  }
 
  listModules()
  {
    this.modulesService.all().subscribe(x=> {
      this.modules = x;
    });
  }
}
