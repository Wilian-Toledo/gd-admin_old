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
  is_load: boolean = false;

  blacklist: any = {};
  constructor(
    private blacklistService: BlacklistService,
    private routeActive: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private companyService: CompanyService,
    private jwt:JwtauthService
  ) {
    this.load();
   }

   load(){
    if (this.routeActive.snapshot.params.id) {
      this.blacklistService.get(this.routeActive.snapshot.params.id).subscribe((x) => {
          this.blacklist = x;
          this.is_load = true;
      });
  }
  else
  {
      this.is_load = true;
  }
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