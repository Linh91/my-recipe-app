import { AuthService } from '../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) { }

  recipeServers() {
    const token = this.authService.getToken();

    // return this.httpClient.put('https://my-recipe-app-6e513.firebaseio.com/recipes.json?', this.recipeServe.getRecipes(), {
    //   observe: 'events',
    //   params: new HttpParams().set('auth', token)
    // });
    const req = new HttpRequest('PUT', 'https://my-recipe-app-6e513.firebaseio.com/recipes.json',
    this.recipeService.getRecipes(), {reportProgress: true});
    return this.httpClient.request(req);
  }

  getRecipeServer() {
    const token = this.authService.getToken();

    this.httpClient.get<Recipe[]>('https://my-recipe-app-6e513.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipe(recipes);
      }
    );
  }
}
