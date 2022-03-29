import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})
export class CompanyCreateComponent implements OnInit {
  is_load: boolean = false;

  company: any = {
    address: {},
  };

  constructor( 
    private companyService: CompanyService,
    private toast: ToastrService,
    private routeActive: ActivatedRoute,
    private router: Router
) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    if (this.routeActive.snapshot.params.id) {
      this.companyService.get(this.routeActive.snapshot.params.id).subscribe(x => {
        this.company = x;
        this.is_load = true;
      });
    }
    else
      this.is_load = true;
  }

  save() {
    if (!this.valid())
      return;

    this.companyService.save(this.company).subscribe(x => {
      this.toast.success("Empresa criado com sucesso", "Sucesso");
      this.router.navigate(['company']);
    });
  }

  valid() {
    if (!this.company.name) {
      this.toast.warning('Nome não foi preenchido!', 'Atenção');
      return false;
    }

    if (!this.company.reference) {
      this.toast.warning('Referência não foi preenchido!', 'Atenção');
      return false;
    }

    return true;
  }
}
