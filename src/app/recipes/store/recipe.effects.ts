import { Actions, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';

import { Recipe } from './../recipe.model';
import * as RecipeActions from './recipe.actions';



@Injectable()
export class RecipeEffects {
    // @Effect()
    // recipeStore = this.actions$
    //     .ofType(RecipeActions.STORE_RECIPE)
    //     .map((action: RecipeActions.StoreRecipe) => {
    //         return
    //     })

    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://my-recipe-app-6e513.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
              });
        })
        .map(
            (recipes) => {
              console.log('recipe effect', recipes);
              for (let recipe of recipes) {
                if (!recipe['ingredients']) {
                  recipe['ingredients'] = [];
                }
              }
              return {
                  type: RecipeActions.SET_RECIPES,
                  payload: recipes
              };
            }
          );

    constructor(private actions$: Actions,
                private httpClient: HttpClient) {}
}
