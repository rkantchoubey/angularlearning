import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  constructor() { }

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  
  getIngredients(){
    return this.ingredients.slice();
  }

  getSLDetails(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
