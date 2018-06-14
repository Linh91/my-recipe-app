import { Ingredient } from './../../shared/ingredient.model';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AddIngredients, DeleteIngredient } from './../../shopping-list/store/shopping-list.action';
import { Recipe } from './../recipe.model';
import * as fromRecipe from '../store/recipe.reducers';
import * as RecipeActions from './../store/recipe.actions';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.action';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipeState: Observable<fromRecipe.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<fromRecipe.FeatureState>) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipeState = this.store.select('recipes');
      }
    );
  }

  onAddShoppingList() {
    this.store.select('recipes') // select slice
    .pipe(take(1))
    .subscribe((recipeState: fromRecipe.State) => { // get recipeState
      console.log('click ingredients', recipeState.recipes[this.id].ingredients[0].name);
      this.store.dispatch(new ShoppingListActions.AddIngredients(
        recipeState.recipes[this.id].ingredients)); // select correct ingredient
    });
  }

  onEditRecipe() {
    console.log('go to edit');
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    console.log(this.id);
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes'], {relativeTo: this.route});
  }
}
