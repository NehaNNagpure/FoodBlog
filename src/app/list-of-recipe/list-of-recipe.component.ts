import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router,ParamMap} from '@angular/router';

@Component({
  selector: 'app-list-of-recipe',
  templateUrl: './list-of-recipe.component.html',
  styleUrls: ['./list-of-recipe.component.css']
})
export class ListOfRecipeComponent implements OnInit {
  name: string[] = ['Paneer', 'Dal Rice', 'Gulab Jamun', 'Chakali', 'Chivada'];
  public selectid:any;
  recipeList=[{
    label :'Butter Paneer',
    id :1
  },
  {
    label :'Dal Tadka',
    id :2
  },
  {
    label :'Jeera Rice',
    id :3
  },
  {
    label :'Chapati',
    id :4
  },
  {
    label :'Gulab Jam',
    id :5
  }


]

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{

      let id=parseInt(params.get('id')|| '{}');
      console.log(id);
      this.selectid=id;
      
    });

  }
  onSelect(recipe:any)
  {
    this.router.navigate([recipe.id],{relativeTo:this.route});

  }
  isSelected(recipe:any)
  {
     return recipe.id === this.selectid;
  }

}
