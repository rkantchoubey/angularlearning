import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../shared/recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe:Recipe;

  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipeService.recipeDetail
    .subscribe((recipe:Recipe)=> {
        this.selectedRecipe = recipe;
    })
  }

}
