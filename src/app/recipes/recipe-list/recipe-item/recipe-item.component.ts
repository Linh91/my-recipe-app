import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, ViewChild, ElementRef, ContentChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<void>();
  // @ContentChild('recipeDescription') paragraph: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onSelected() {
    this.selectedRecipe.emit();
  }
}
