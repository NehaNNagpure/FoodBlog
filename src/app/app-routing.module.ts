import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRecipeComponent } from './list-of-recipe/list-of-recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesdetailsComponent } from './recipesdetails/recipesdetails.component';

const routes: Routes = [
  {path:'recipe',component:ListOfRecipeComponent},
  {path:'recipes/:id',component:RecipesComponent},
  {path:'details/:id',component:RecipesdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
