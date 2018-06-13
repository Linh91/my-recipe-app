import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';

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

export function recipeReducer(state = initialState, action) {
    return state;
}
