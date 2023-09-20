import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe/recipe.model";
import {RecipeService} from "../recipe/recipe.service";

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    recipeService.getSelectedRecipe().subscribe((recipe:Recipe) => {
      this.recipe = recipe;
    })
  }
}
