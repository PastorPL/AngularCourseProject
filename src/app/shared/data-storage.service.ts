import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private fireBaseURL = 'https://ng-course-recipe-book-764d4.firebaseio.com/recipes.json';

  constructor(private http: HttpClient,
              private recipeService: RecipesService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.fireBaseURL, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
    this.http
      .get<Recipe[]>(this.fireBaseURL)
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes);
    });
  }
}
