import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { BlacklistService } from '../blacklist.service';

@Component({
  selector: 'app-blacklist-create',
  templateUrl: './blacklist-create.component.html',
  styleUrls: ['./blacklist-create.component.css']
})
export class BlacklistCreateComponent implements OnInit {

  blacklist: any = {};
  constructor(
    private blacklistService: BlacklistService,
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
    this.blacklistService.save(this.blacklist).subscribe(x => {
      this.toast.success("Blacklist salva com sucesso", "Sucesso");
      this.router.navigate(['blacklist']);
    });
  }

  delete() {
    this.blacklistService.delete(this.blacklist.id).subscribe(x => {
      this.toast.success("Blacklist excluída com sucesso", "Sucesso");
      this.router.navigate(['blacklist']);
    });
  }

}