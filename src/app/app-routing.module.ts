import { Routes } from '@angular/router';
import {AuthComponent} from './modules/auth/auth.component';
export const AppRouting: Routes = [
  {
    path: '', redirectTo: '/auth/login', pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' }
    ]
  }
];
