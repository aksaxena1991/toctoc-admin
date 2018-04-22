import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {AuthRoutingModule} from './auth-routing.module';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
@NgModule({
  imports: [
    CommonModule,
AuthRoutingModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule
  ],
  // providers: [AuthService],
  declarations: [LoginComponent, RegistrationComponent]
})
export class AuthModule { }
