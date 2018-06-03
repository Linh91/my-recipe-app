import { AuthService } from './../auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
// import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: Http, private recipeServe: RecipeService, private authService: AuthService) { }
  recipeServers() {
    return this.http.put('https://my-recipe-app-6e513.firebaseio.com/recipes.json',
                    this.recipeServe.getRecipes());
  }

  getRecipeServer() {
    const token = this.authService.getToken();

    this.http.get('https://my-recipe-app-6e513.firebaseio.com/recipes.json?auth=' + token)
    .pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    ))
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeServe.setRecipe(recipes);
      }
    );
  }
}
