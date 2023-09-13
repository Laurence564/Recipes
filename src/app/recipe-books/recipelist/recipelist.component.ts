import { Component } from '@angular/core';
import {Recipe} from "../recipe/recipe.model";

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent {

  public parentRecipesList: Recipe[] = [
    new Recipe(
      'Fish & Chips',
      'A British Classic!',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Fish%2C_chips_and_mushy_peas.jpg/800px-Fish%2C_chips_and_mushy_peas.jpg?20070522095400'
    ),
    new Recipe(
      'Chicken Tikka Masala',
      'A British Classic!',
      'https://images.pexels.com/photos/14537690/pexels-photo-14537690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    )
  ];

}
