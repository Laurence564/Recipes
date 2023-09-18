import {Component, HostListener} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  public ingredients: Ingredient[] = [
    new Ingredient("Fish", 1),
    new Ingredient("Potato", 2)
  ];

  onIngredientAdded(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }

}
