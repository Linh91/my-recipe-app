import { RecipeService } from './recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
