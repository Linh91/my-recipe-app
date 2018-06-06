import * as ShoppingListActions from './shopping-list.action';

import { Ingredient } from './../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
    ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch (action.type) {
        case ShoppingListActions.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case ShoppingListActions.ADD_INGREDIENTS:
            return {
                ...state,
                ingredients: [...state.ingredients, ...action.payload]
            };
        case ShoppingListActions.UPDATE_INGREDIENT:
            const ingredient = state.ingredients[action.payload.index];
            const updatedIngredient = {
                ...ingredient,
                ...action.payload.ingredient
            };
            const ingredients = [...state.ingredients];
            ingredients[action.payload.index] = updatedIngredient;
            return {
                ...state,
                ingredients: ingredients
            };
        case ShoppingListActions.DELETE_INGREDIENT:
            const oldIngredient = [...state.ingredients];
            oldIngredient.splice(action.payload.index, 1);
            return {
                ...state,
                ingredients: oldIngredient
            };
        default:
        return state;
    }
}
