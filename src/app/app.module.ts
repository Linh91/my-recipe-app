import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownDirective } from './shared/dropdown.directive';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeService } from './recipes/recipe.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { ServerService } from './servers/server.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    ServerService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
