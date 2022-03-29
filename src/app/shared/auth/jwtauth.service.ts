import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { SessionStorageService } from 'ngx-webstorage';
import { Keys } from '../models/keys';

@Injectable({
  providedIn: 'root'
})
export class JwtauthService {
  /**
   *
   */
  constructor(
    private sessionStorageService: SessionStorageService,

  ) {
    
  }

  public getToken(): string {
    return this.sessionStorageService.retrieve(Keys.Auth);
  }

  public content(): any {
    try {
      return jwt_decode(this.getToken());
    } catch (Error) {
      return null;
    }
  }

  public CompanyCurrent(): any {
    return this.content().company_current;
  }

  public AccountCurrent(): any {
    return this.content().usrid;
  }

  public CompaniesToken(): any[] {
    return this.content().companies;
  }
}
