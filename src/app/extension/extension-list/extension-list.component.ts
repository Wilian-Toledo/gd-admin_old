import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SessionStorageService } from 'ngx-webstorage';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { ExtensionService } from '../extension.service';

@Component({
  selector: 'app-extension-list',
  templateUrl: './extension-list.component.html',
  styleUrls: ['./extension-list.component.css']
})
export class ExtensionListComponent implements OnInit {

  filter: any = {
    skip: 0,
    take: 10
  };
  
  extensions: any;
  companyId: any = {};

  constructor(
    private extensionService: ExtensionService,
    private toast: ToastrService,
    private sessionStorageService: SessionStorageService,
		private jwt: JwtauthService
  ) {
    this.listExtension();
  }
  
  ngOnInit(): void {
  }

  listExtension()
  {
    this.extensionService.all().subscribe(x=> {
      this.extensions = x;
    });
  }

}
