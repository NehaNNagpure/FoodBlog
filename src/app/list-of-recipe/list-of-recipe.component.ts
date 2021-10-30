import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-recipe',
  templateUrl: './list-of-recipe.component.html',
  styleUrls: ['./list-of-recipe.component.css']
})
export class ListOfRecipeComponent implements OnInit {
  name: string[] = ['Paneer', 'Dal Rice', 'Gulab Jamun', 'Chakali', 'Chivada'];

  constructor() { }

  ngOnInit(): void {
  }

}
