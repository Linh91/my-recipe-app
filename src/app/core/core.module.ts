import { AuthInterceptor } from './../shared/auth.interceptor';
import { AppRoutingModule } from './../app-routing.module';
import { AuthService } from './../auth.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
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
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
export class CoreModule { }
