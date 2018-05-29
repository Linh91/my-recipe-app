import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipes/recipes.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes' },
  { path: 'recipes', component: RecipeComponent },
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot.apply(appRoutes)]
})
export class AppRoutingModule {

}
