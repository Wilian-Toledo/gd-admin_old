import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { SessionStorageService } from 'ngx-webstorage';
import { AccountService } from '../../accounts/accounts.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(
		private authService: AuthService,
		private sessionStorageService: SessionStorageService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isAuthenticated.pipe(
            take(1),
            map((isLoggedIn: boolean) => {
                if (isLoggedIn) {
                    return true;
                } else {
                    this.authService.redirectLoginPage();
                    return false;
                }
            })
          );
	}
}
