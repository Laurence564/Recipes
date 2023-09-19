import {Component, Input} from '@angular/core';
import {Recipe} from "../recipe/recipe.model";
import {RecipeService} from "../recipe/recipe.service";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {

  @Input() childComponentRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  onSelected() {
    this.recipeService.getSelectedRecipe().emit(this.childComponentRecipe);
  }

}
