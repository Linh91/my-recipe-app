import * as ShoppingListActions from './shopping-list.action';

import { Ingredient } from './../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export interface AppState {
    shoppingList: State;
}

export interface State {
    ingredients: Ingredient[];
    editedIngredient: Ingredient;
    editedIngredientIndex: number;
}

const initialState: State = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 3)
    ],
    editedIngredient: null,
    editedIngredientIndex: -1
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
            oldIngredient.splice(action.payload, 1);
            return {
                ...state,
                ingredients: oldIngredient
            };
        case ShoppingListActions.START_EDIT:
            const editedIngredient = {...state.ingredients[action.payload]};
            return {
                ...state,
                editedIngredient: editedIngredient,
                editedIngredientIndex: action.payload
            };
        default:
        return state;
    }
}
