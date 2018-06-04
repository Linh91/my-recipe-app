import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SighupComponent } from './sighup/sighup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  imports: [
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [
    SigninComponent,
    SighupComponent
  ]
})
export class AuthModule { }
