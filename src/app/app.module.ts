import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './shared/dropdown.directive';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RecipeModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { AppComponent } from './app.component';
import { RecipeService } from './recipes/recipe.service';
import { ServerService } from './servers/server.service';
import { SighupComponent } from './auth/sighup/sighup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SighupComponent,
    SigninComponent,
    ShoppingListComponent,
    ShoppingListEditComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    RecipeModule,
    SharedModule
  ],
  providers: [ShoppingListService,
              RecipeService,
              ServerService,
              AuthService,
              AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
