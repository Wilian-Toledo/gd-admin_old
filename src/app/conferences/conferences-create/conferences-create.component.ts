import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ConferencesService } from "../conferences.service";

@Component({
  selector: 'app-conferences-create',
  templateUrl: './conferences-create.component.html',
  styleUrls: ['./conferences-create.component.css']
})
export class ConferencesCreateComponent implements OnInit {
  is_load: boolean = false;

  conferences:any={}
  constructor(
    private conferencesService: ConferencesService,
    private toast: ToastrService,
    private router: Router,
    private routeActive: ActivatedRoute
    ){ 
        this.load();
  }

  load() {
    if (this.routeActive.snapshot.params.id) {
        this.conferencesService.get(this.routeActive.snapshot.params.id).subscribe((x) => {
            this.conferences = x;
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

  save(){
    this.conferencesService.save(this.conferences).subscribe((result) => {
      console.log(result);
      this.toast.success("Conferencia criada com sucesso!", "Sucesso");
      this.router.navigate(["conferences"]);
    });
  }
}

