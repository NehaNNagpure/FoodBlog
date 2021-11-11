import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent implements OnInit {

  public recipeid:any;

public recipes=[{
  name:'Paneer Butter Masala',
  id:1,
  ChefName:'Ranveer',
  Content:"Paneer butter masala also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter",
  path:"assets/images/paneer-butter-masala-5-500x375.jpg"

},{
  name:'Dal Fry',
  id:2,
  ChefName:'Ranveer',
  Content:"Dal Fry is a spicy punjabi dish made from mixed dals like toor, chana, moong, masoor dal or just with chana and toor dal",
   path:"assets/images/Dal-Fry-Marathi.jpg"
},{
name:'Jeera Rice',
  id:3,
  ChefName:'Ranveer',
  Content:"Jeera rice or Zeera rice is an Indian dish consisting of rice and cumin seeds.It is a popular dish in North India.",
  path:"assets/images/Jeera-Rice.jpg"

  },{
    name:'Chapati',
      id:4,
      ChefName:'Ranveer',
      Content:"Chapatis are one of the most common forms of wheat bread which are a staple food in the Indian subcontinent. ",
      path:"assets/images/chapati.jpg"
    },{
      name:'Gulab Jamun',
        id:5,
        ChefName:'Ranveer',
        Content:"Gulab jamun is an Indian dessert of fried dough balls that are soaked in a sweet, sticky sugar syrup.",
        path:"assets/images/Gulab_jamun.jpg"
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
