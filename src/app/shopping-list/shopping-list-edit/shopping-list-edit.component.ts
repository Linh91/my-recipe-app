import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AddIngredient, DeleteIngredient, UpdateIngredient } from './../store/shopping-list.action';
import { ShoppingListService } from './../shopping-list.service';
import * as ShoppingListActions from '../store/shopping-list.action';
import * as fromShoppingList from '../store/shopping-list.reducers';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppinglistService: ShoppingListService,
              private store: Store<fromShoppingList.AppState>) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.statedEditing
    .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  addIngredients(form: NgForm) {
    const value = form.value;
      const newIngredient = new Ingredient(value.name, value.amount);
      if (this.editMode) {
        this.store.dispatch(new ShoppingListActions.UpdateIngredient({index: this.editedItem, ingredient: newIngredient}));
        console.log('new ing', newIngredient);
      } else {
        this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
      }
      this.slForm.reset();
      this.editMode = false;
  }

  onClear() {
    this.slForm.setValue({
      'name': '',
      'amount': '',
    });
    this.editMode = false;
    // this.slForm.reset();
  }

  onDeletItem() {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
