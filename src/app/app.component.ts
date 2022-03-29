import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isloging:boolean = false;

  constructor(private authService: AuthService) {
    
   }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(x =>{  
      this.isloging = x;
    });
  }
  
  title = 'gd-admin';
}
