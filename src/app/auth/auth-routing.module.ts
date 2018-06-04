import { SigninComponent } from './signin/signin.component';
import { SighupComponent } from './sighup/sighup.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const authRoutes: Routes = [
  { path: 'signup', component: SighupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
