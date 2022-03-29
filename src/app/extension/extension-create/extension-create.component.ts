import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { ExtensionService } from '../extension.service';

@Component({
  selector: 'app-extension-create',
  templateUrl: './extension-create.component.html',
  styleUrls: ['./extension-create.component.css']
})
export class ExtensionCreateComponent implements OnInit {

  extension: any = {};

  constructor(
    private extensionService: ExtensionService,
    private routeActive: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private companyService: CompanyService,
    private jwt:JwtauthService
  ) {
   }

  ngOnInit(): void {
  }

  save() {
    this.extensionService.save(this.extension).subscribe(x => {
      this.toast.success("Ramal salvo com sucesso", "Sucesso");
      this.router.navigate(['extension']);
    });
  }

  delete() {
    this.extensionService.delete(this.extension.id).subscribe(x => {
      this.toast.success("Ramal excluído com sucesso", "Sucesso");
      this.router.navigate(['extension']);
    });
  }

}
