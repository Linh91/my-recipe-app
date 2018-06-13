import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import * as RecipeActions from './recipe.actions';

export interface FeatureState {
    recipes: State;
}

export interface State {
    recipes: Recipe[];
}

const initialState: State = {
    recipes: [
        new Recipe('Wagyu steak',
                    'Best wagyu steak recipe',
                    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg',
                    [
                      new Ingredient('Steak', 1),
                      new Ingredient('Salt', 10)
                    ]),
        new Recipe('Egg fried rice',
                    'Easy egg fried rice',
                    'https://www.ndtv.com/cooks/images/EGG.FRIED.RICE.44%281%29.jpg',
                    [
                      new Ingredient('Eggs', 4),
                      new Ingredient('Rice', 50)
                    ]),
                ]
};

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {
    switch (action.type) {
        case (RecipeActions.SET_RECIPE):
            return {
                ...state, // previous state properties
                recipes: [...action.payload] // action.payload = recipe[]
            };
        case (RecipeActions.ADD_RECIPE):
            return {
                ...state,
                recipes: [...state.recipes, action.payload] // action.payload = new recipe
            };
        case (RecipeActions.UPDATE_RECIPE):
            const recipe = state.recipes[action.payload.index]; // find old recipe in arr
            const updatedRecipe = {
                ...recipe, // properties of old recipe
                ...action.payload.updateRecipe // add in the new properties
            };
            const recipes = [...state.recipes]; // recipes array
            recipes[action.payload.index] = updatedRecipe; // replace recipe
            return {
                ...state,
                recipes: recipes
            };
        case (RecipeActions.DELETE_RECIPE):
            const oldRecipes = [...state.recipes]; // old recipes array
            oldRecipes.splice(action.payload.index, 1); // removed recipe
            return {
                ...state,
                recipes: oldRecipes
            };
    }
    return state;
}
