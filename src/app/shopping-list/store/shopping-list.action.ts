import { Ingredient } from './../../shared/ingredient.model';
import { Action } from 'rxjs/internal/scheduler/Action';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action {
    readonly type = ADD_INGREDIENT;
    payload: Ingredient;
}

export type ShoppingListActions = AddIngredient;
