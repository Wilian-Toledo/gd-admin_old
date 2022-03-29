import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'ngx-webstorage';
import { Observable, BehaviorSubject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Keys } from '../models/keys';
import { AccountService } from 'src/app/accounts/accounts.service';
import { JwtauthService } from './jwtauth.service';

@Injectable()
export class AuthService {
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    
    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService,
        private accountService: AccountService,
        private toast: ToastrService,
        private router: Router,
		private jwt: JwtauthService
    ) { }

    get isAuthenticated() {
        let token = this.sessionStorageService.retrieve(Keys.Auth);
        if (token)
            this.loggedIn.next(true);
        else
            this.loggedIn.next(false);

        return this.loggedIn.asObservable();
    }

    public redirectLoginPage(): void {
        this.router.navigate(['/login']);
    }

    public logout(): void {
        console.log("logout executado");
        
        this.sessionStorageService.clear();

        this.loggedIn.next(false);

        this.redirectLoginPage();
    }


    public Authentication(account: any) {
        this.http.post(`/login/admin`, account).subscribe(token => {
            this.setCompanyToken(token);
        });
    }

    public setCompanyToken(token: Object) {
        if (token["authenticated"]) {

            this.sessionStorageService.store(Keys.Auth, token["access_token"]);
            this.loggedIn.next(true);

            this.accountService.current().subscribe(current => {

                let companies: any[] = [];
                current.roles.forEach(x => {
                    companies.push(x.company);
                });

                let roleCurrent = current.roles.find(x => x.company.id == this.jwt.CompanyCurrent());

                this.sessionStorageService.store(Keys.StoragesCompany, companies);
                this.sessionStorageService.store(Keys.StoragesResource, roleCurrent.resources);

                let url = `${environment.url}/home`;
                window.open(url, '_self');
            });
        }

        else
            this.toast.warning(token["message"]);
    }
}
