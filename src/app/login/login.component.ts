import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggin: boolean = false;
  account: any = {};

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.loggin = true;
    this.authService.Authentication(this.account);
    this.authService.isAuthenticated.subscribe(authenticated => {
      if (!authenticated)
        this.loggin = false;
    });
  }
}
