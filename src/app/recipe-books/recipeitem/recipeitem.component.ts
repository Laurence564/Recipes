import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from "../recipe/recipe.model";

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent {

  @Input() childComponentRecipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  onSelected() {
    this.recipeSelected.emit();
  }
}
