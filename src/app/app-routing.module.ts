import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRecipeComponent } from './list-of-recipe/list-of-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

const routes: Routes = [
  {path:'recipe',component:ListOfRecipeComponent},
  {path:'recipeDetail/:id',component:RecipeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
