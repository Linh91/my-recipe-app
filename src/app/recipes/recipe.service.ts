import { Recipe } from './recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Wagyu steak', 'Best wagyu steak recipe',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg'),
    new Recipe('Wagyu steak', 'Best wagyu steak recipe',
    'https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg', )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
