import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeModule } from './recipes/recipes.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth.service';
import { ServerService } from './servers/server.service';
import { RecipeService } from './recipes/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { SighupComponent } from './auth/sighup/sighup.component';
import { SigninComponent } from './auth/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
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
    RecipeModule
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
