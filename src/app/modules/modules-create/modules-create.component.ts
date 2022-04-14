import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ModulesService } from "../modules.service";

@Component({
    selector: "app-modules-create",
    templateUrl: "./modules-create.component.html",
    styleUrls: ["./modules-create.component.css"],
})
export class ModulesCreateComponent implements OnInit {
    is_load: boolean = false;

    modules: any = {};
    constructor(
        private modulesService: ModulesService,
        private toast: ToastrService,
        private router: Router,
        private routeActive: ActivatedRoute
    ) {
        this.load();
    }

    load() {
        if (this.routeActive.snapshot.params.id) {
            this.modulesService.get(this.routeActive.snapshot.params.id).subscribe((x) => {
                this.modules = x;
                this.is_load = true;
            });
        }
        else
        {
            this.is_load = true;
        }
    }

    ngOnInit(): void {}

    save() {
        this.modulesService.save(this.modules).subscribe((result) => {
            console.log(result);
            this.toast.success("Modulo criado com sucesso!", "Sucesso");
            this.router.navigate(["modules"]);
        });
    }
}
