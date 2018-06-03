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

  constructor(private http: Http, private recipeServe: RecipeService) { }
  recipeServers() {
    return this.http.put('https://my-recipe-app-6e513.firebaseio.com/recipes.json',
                    this.recipeServe.getRecipes());
  }

  getRecipeServer() {
    return this.http.get('https://my-recipe-app-6e513.firebaseio.com/recipes.json')
    .subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeServe.setRecipe(recipes);
      }
    );
  }
}
