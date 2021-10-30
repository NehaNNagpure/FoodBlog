import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfRecipeComponent } from './list-of-recipe/list-of-recipe.component';

const routes: Routes = [
  {path:'Recipe',component:ListOfRecipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
