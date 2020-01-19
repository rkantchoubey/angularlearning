import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

   recipeDetail = new EventEmitter<Recipe>();
  constructor() { }

  private recipes: Recipe[] = [
    new Recipe(
     'Tasty Schnitzel',
     'A super testy Schnitzel',
     'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
     [
       new Ingredient('meat',1),
       new Ingredient('french fries',23)
     ]),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say ?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns',12),
        new Ingredient('Meat',20)
      ])
  ];

  getRecipe(){
    return this.recipes.slice();
  }

}
