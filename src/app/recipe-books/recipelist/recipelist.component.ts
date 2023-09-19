import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe/recipe.model";
import {RecipeService} from "../recipe/recipe.service";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit{

  parentRecipesList: Recipe[] = [];

  constructor(private recipeService:RecipeService) {
  }

  ngOnInit(): void {
    this.parentRecipesList = this.recipeService.getRecipes();
  }

}
