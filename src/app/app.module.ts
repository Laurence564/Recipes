import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-lists/shopping-list/shopping-list.component';
import { EditshoppinglistComponent } from './shopping-lists/editshoppinglist/editshoppinglist.component';
import { HeaderComponent} from "./header/header.component";
import { RecipelistComponent } from './recipe-books/recipelist/recipelist.component';
import { RecipedetailComponent } from './recipe-books/recipedetail/recipedetail.component';
import { RecipeitemComponent } from './recipe-books/recipeitem/recipeitem.component';
import { RecipeComponent } from './recipe-books/recipe/recipe.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    EditshoppinglistComponent,
    HeaderComponent,
    RecipelistComponent,
    RecipedetailComponent,
    RecipeitemComponent,
    RecipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
