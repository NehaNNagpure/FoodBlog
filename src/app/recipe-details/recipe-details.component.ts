import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent implements OnInit {

  public recipeid:any;

public recipes=[{
  name:'name of chef',
  id:1,
  ChefName:'Ranveer',
  Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  path:"assets/images/Chef_Ranveer_Brar.jpg"
},{
  name:'Dal',
  id:2,
  ChefName:'Ranveer',
  Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  path:"assets/images/Dal-Fry-Marathi.jpg"
},{
name:'Dal',
  id:3,
  ChefName:'Ranveer',
  Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
  path:"assets/images/dal-makhani-recipe-1.jpg"
},{
  name:'Dal',
    id:4,
    ChefName:'Ranveer',
    Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    path:"assets/images/Dal-Tadka-Recipe.jpg"
  },{
    name:'Dal',
      id:5,
      ChefName:'Ranveer',
      Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
      path:"assets/images/simpledal.jpg"
    },{
      name:'Paneer',
        id:6,
        ChefName:'Ranveer',
        Content:"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        path:"assets/images/paneer-butter-masala-5-500x375.jpg"
      }
]


  // name,
  // id,
  // chef name 
  // conetent 
  // "assets/images/Chef_Ranveer_Brar.jpg
// 1= paneer
//2= dalma

public selectRecipe:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
       this.route.paramMap.subscribe((params:ParamMap)=>{
        let id=parseInt(params.get('id')|| '{}');
        console.log(id);
        this.recipeid=id;
        console.log(this.recipes.filter(item=>item.id==this.recipeid));
        this.selectRecipe=this.recipes.filter(item=>item.id==this.recipeid);
        console.log(this.selectRecipe);
       });

     }
  

    }
