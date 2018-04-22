import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
const AuthRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      breadcrumb: 'Login'
    }
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    data: {
      breadcrumb: 'Registration'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
 ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
