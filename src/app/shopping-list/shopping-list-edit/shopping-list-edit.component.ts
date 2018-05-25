import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() ingredientList = new EventEmitter<{ingredientName: string, ingredientAmount: number}>();
  // ingredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredients(name, amount) {
    this.ingredientList.emit({
      ingredientName: name.value,
      ingredientAmount: amount.value
    });
  }

  // addIngredients() {
  //   const ingName = this.nameInput.nativeElement.value;
  //   const ingAmount = this.ingAmount.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.ingredientList.emit(newIngredient);
  // }

}
