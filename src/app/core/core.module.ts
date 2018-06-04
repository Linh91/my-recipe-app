import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RecipeService } from './../recipes/recipe.service';
import { SharedModule } from './../shared/shared.module';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { ServerService } from './../servers/server.service';

@NgModule({
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    ServerService,
    AuthService
  ]
})
export class CoreModule { }
