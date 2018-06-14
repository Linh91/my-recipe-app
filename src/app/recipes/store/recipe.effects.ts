import { Actions, Effect } from '@ngrx/effects';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/withLatestFrom';

import { switchMap, withLatestFrom, map } from 'rxjs/operators';

import { Recipe } from './../recipe.model';
import * as RecipeActions from './recipe.actions';
import * as fromRecipe from './recipe.reducers';



@Injectable()
export class RecipeEffects {
    @Effect()
    recipeFetch = this.actions$
        .ofType(RecipeActions.FETCH_RECIPES)
        .pipe(switchMap((action: RecipeActions.FetchRecipes) => {
            return this.httpClient.get<Recipe[]>('https://my-recipe-app-6e513.firebaseio.com/recipes.json', {
                observe: 'body',
                responseType: 'json'
              });
        }), map(
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
          ));

    @Effect({dispatch: false}) // dont want to do anything after this effect
    recipeStore = this.actions$
        .ofType(RecipeActions.STORE_RECIPE) // if it is the case there is store recipe then
        .pipe(withLatestFrom(this.store.select('recipes')),
            switchMap(([action, state]) => { // combing oftype (action) and withlatestfrom (state)
            // tslint:disable-next-line:max-line-length
            const req = new HttpRequest('PUT', 'https://my-recipe-app-6e513.firebaseio.com/recipes.json', // slice which returns an observable
            state.recipes, {reportProgress: true}); // accessing recipe through state instead of service
            return this.httpClient.request(req);
        }));

    constructor(private actions$: Actions,
                private httpClient: HttpClient,
                private store: Store<fromRecipe.FeatureState>) {}
}
