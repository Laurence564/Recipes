import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";

Injectable()
export class RecipeService {

  private parentRecipesList: Recipe[] = [
    new Recipe(
      'Fish & Chips',
      'A British Classic!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fish%2C_chips_and_mushy_peas.jpg/800px-Fish%2C_chips_and_mushy_peas.jpg?20070522095400'
    ),
    new Recipe(
      'Chicken Tikka Masala',
      'The British favourite!',
      'https://images.pexels.com/photos/14537690/pexels-photo-14537690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    )
  ];
  private recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.parentRecipesList.slice();
  }

  getSelectedRecipe() {
    return this.recipeSelected;
  }
}
