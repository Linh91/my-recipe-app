import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './shared/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeModule } from './recipes/recipes.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ServerService } from './servers/server.service';
import { SighupComponent } from './auth/sighup/sighup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SighupComponent,
    SigninComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    RecipeModule,
    SharedModule,
    ShoppingListModule
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
