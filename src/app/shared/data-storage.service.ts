import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {RecipesService} from '../recipes/recipes.service';
import {Recipe} from '../recipes/recipe.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../auth/auth.service';
import {pipe} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  private fireBaseURL = 'https://ng-course-recipe-book-764d4.firebaseio.com/recipes.json';

  constructor(private http: HttpClient,
              private recipeService: RecipesService,
              private authService: AuthService) {  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.fireBaseURL, recipes).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipes() {
      return this.http
        .get<Recipe[]>(this.fireBaseURL)
        .pipe(
           map(recipes => {
              return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
              });
            }),
           tap(recipes => {
              this.recipeService.setRecipes(recipes);
            })
        );
  }
}
