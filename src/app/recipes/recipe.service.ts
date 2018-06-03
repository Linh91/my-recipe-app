import { Subject } from 'rxjs';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
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
  ];

  constructor(private shoppingListService: ShoppingListService) { }
  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  newRecipe() {
    this.recipeChanged.next(this.recipes.slice());
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    console.log('add', this.recipes);
    this.newRecipe();
  }

  UpdateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    console.log('update', this.recipes);
    this.newRecipe();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.newRecipe();
    console.log('array', this.recipes);
  }
}
