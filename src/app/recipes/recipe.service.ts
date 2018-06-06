import { AddIngredients } from './../shopping-list/store/shopping-list.action';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

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

  constructor() { }

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
