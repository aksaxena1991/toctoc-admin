import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthComponent} from './modules/auth/auth.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {SharedModule} from './modules/shared/shared.module';
import {AppRouting} from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(AppRouting)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
