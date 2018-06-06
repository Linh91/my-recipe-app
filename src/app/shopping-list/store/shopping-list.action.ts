import { Ingredient } from './../../shared/ingredient.model';
import { Action } from 'rxjs/internal/scheduler/Action';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export class AddIngredient implements Action<any> {
    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {}
}

export type ShoppingListActions = AddIngredient;
