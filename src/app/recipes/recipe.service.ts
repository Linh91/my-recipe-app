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
}
