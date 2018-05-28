import { RecipeService } from './../recipe.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddShoppingList() {
    console.log('click ingredients', this.recipe.ingredients);
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

}
