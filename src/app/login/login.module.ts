import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { ForgotComponent } from './forgot/forgot.component';

@NgModule({
  declarations: [LoginComponent, ForgotComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ],
  providers: [AuthService]
})
export class LoginModule { }
