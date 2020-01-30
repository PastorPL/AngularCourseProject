import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
      'A super-nasty tasty Schnitzel - just awsome!',
      'https://p1.pxfuel.com/preview/986/194/351/eat-breaded-schnitzel-gravy.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe('Big Fat Burger',
      'What else need to say?',
      'https://p1.pxfuel.com/preview/791/638/395/appetite-beef-big-bread.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor() { }

}