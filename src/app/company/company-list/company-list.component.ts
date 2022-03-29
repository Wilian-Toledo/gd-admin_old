import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
 
  pagination: any = {
    page: 1,
    take: 10
  };

  filter: any = {
    skip: 0,
    take: 10
  };
  
  company: any;

  constructor(
    private companyService: CompanyService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }

  search(filter)
  {
    if (!this.valid())
      return;

    this.companyService.search(filter).subscribe(x=> {
      this.pagination.page = x.skip + 1;
      this.company = x;
    });
  }

  valid() {
    if (!this.filter.id && !this.filter.name && !this.filter.document) {
      this.toast.warning('Necessário preencher pelo menos uma opção!', 'Atenção');
      return false;
    }

    return true;
  }

  getPage(skipPage: number) {
		this.filter.skip = skipPage - 1;
    this.search(this.filter);
  }

  delete(id: string) {
    this.companyService.delete(id).subscribe(x=> {
      this.toast.success('Empresa removido com sucesso!', 'Sucesso');

      this.search(this.filter);
    });
  }

}
