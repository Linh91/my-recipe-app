import { HomeComponent } from './home/home.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SighupComponent } from './auth/sighup/sighup.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule'}
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
