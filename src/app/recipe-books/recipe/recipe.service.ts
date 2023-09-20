import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../../shared/ingredient.model";

Injectable()
export class RecipeService {

  private parentRecipesList: Recipe[] = [
    new Recipe(
      'Fish & Chips',
      'A British Classic!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fish%2C_chips_and_mushy_peas.jpg/800px-Fish%2C_chips_and_mushy_peas.jpg?20070522095400',
      [
        new Ingredient("Fish", 1),
        new Ingredient("Batter", 1),
        new Ingredient("Potato", 1)
      ]
    ),
    new Recipe(
      'Chicken Tikka Masala',
      'The British favourite!',
      'https://images.pexels.com/photos/14537690/pexels-photo-14537690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      [
        new Ingredient("Onions", 4),
        new Ingredient("Chicken", 1),
        new Ingredient("Red Peppers", 1),
        new Ingredient("Chopped Tomatoes", 2),
        new Ingredient("Mango Chutney", 1)
      ]
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
