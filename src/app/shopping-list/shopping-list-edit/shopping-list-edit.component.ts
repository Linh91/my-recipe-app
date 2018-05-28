import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredients() {
      const ingreName = this.nameInputRef.nativeElement.value;
      const ingreAmount = this.amountInputRef.nativeElement.value;
      const newIngredient = new Ingredient(ingreName, ingreAmount);
      this.shoppinglistService.addIngredient(newIngredient);
  }
}
