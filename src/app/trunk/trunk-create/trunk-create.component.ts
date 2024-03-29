import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/company/company.service';
import { JwtauthService } from 'src/app/shared/auth/jwtauth.service';
import { TrunkService } from '../trunk.service';

@Component({
  selector: 'app-trunk-create',
  templateUrl: './trunk-create.component.html',
  styleUrls: ['./trunk-create.component.css']
})
export class TrunkCreateComponent implements OnInit {
  is_load: boolean = false;

  trunk: any = {};

  constructor(
    private trunkService: TrunkService,
    private routeActive: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
    private companyService: CompanyService,
    private jwt:JwtauthService
  ) {
    this.load();
   }

   load() {
      if (this.routeActive.snapshot.params.id) {
          this.trunkService.get(this.routeActive.snapshot.params.id).subscribe((x) => {
              this.trunk = x;
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
    this.trunkService.save(this.trunk).subscribe(x => {
      this.toast.success("Tronco salvo com sucesso", "Sucesso");
      this.router.navigate(['trunk']);
    });
  }

  delete() {
    this.trunkService.delete(this.trunk.id).subscribe(x => {
      this.toast.success("Tronco excluído com sucesso", "Sucesso");
      this.router.navigate(['trunk']);
    });
  }

}
