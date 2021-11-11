import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipesdetails',
  templateUrl: './recipesdetails.component.html',
  styleUrls: ['./recipesdetails.component.css']
})
export class RecipesdetailsComponent implements OnInit {
  public selectRecipe:any;
  public recipeid:any;
  constructor(private route:ActivatedRoute,private router:Router) { }
RecipeDetails=[{
  name1:"Paneer Butter Masala",
  chefName:"Ranveer",
  preparationTime:"30 mins",
  cooking:"11",
  NumberOfPeoples:"4",
  id:1,
  
  path:"assets/images/paneer-butter-masala-5-500x375.jpg",
  ingredients :[
    
    {
      name: "Paneer",
     quantity: 300 ,
     unit :"gms"

    },
    {
      name: "Tomato puree",
     quantity: 31 ,
     unit :"cup"
    },
    {
      name: "Onion ",
     quantity: 5 ,
     unit :"medium"
    }, {
      name: "Garam masala",
     quantity: 1 ,
     unit :"tsp"
    }, {
      name: "Chilli powder",
     quantity: 1 ,
     unit :"tsp"
    }, {
      name: "cream",
     quantity: 2 ,
     unit :"tsp"
    }, {
      name: "oil",
     quantity: 2 ,
     unit :"tbsp"
    }, {
      name: "jeera",
     quantity: 1 ,
     unit :"tsp"
    }, {
      name: "coriander seeds",
     quantity: 1 ,
     unit :"tbsp"
    }, {
      name: "Red Chilli",
     quantity: 4 ,
     unit :"-"
    }, {
      name: "peppercorns",
     quantity: 9 ,
     unit :"-"
    }, {
      name: "salt",
     quantity: 9 ,
     unit :"-"
    }],
  recipeinfor :[
    {
      name:"Heat 1 teaspoon of oil in a pan on medium heat. Once the oil is hot,add the bay leaf, cinnamon stick, cloves and saute for few seconds.  Then add the the onion, garlic, ginger and saute for 2 to 3 minutes until the onion is translucent."

   },{
     name:"Add the tomatoes and cashews and mix."
   },{
     name:" Then add 1 cup of water."
   },{
     name:"Cover the pan and cook on medium heat for 15 minutes."
   },{
     name:"After 15 minutes, remove the pan from heat. Remove the bay leaf, cinnamon stick and cloves."
   },{
     name:"Let the mixture cool down a bit and then transfer to a blender. It’s important to let it cool down a bit else it will all blow up from the mixer."
   },{
     name:" Grind the masala to a smooth paste and set aside."
   },{
     name:"To the same pan now add 2 tablespoons butter along with remaining 1 teaspoon oil on medium heat."
   },{
     name:"Once the butter melts, add the red chili powder and the Kashmiri red chili powder and fry for few seconds. This will give the curry a nice red color."
   },{
     name:"Then add the ground paste back into the pan along with the garam masala (start with 1/2 teaspoon and add the remaining 1/4 teaspoon at the end only if you feel like the curry needs that extra bit of garam masala), cardamom powder, sugar, salt and tomato paste (if using)."
    },{
      name:"Then add the cream and mix."
    },{
      name:"Add in the paneer and cook for 2 to 3 minutes on medium heat. Finally add crushed kasuri methi."
    },
]
}]

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id')|| '{}');
      console.log(id);
      this.recipeid=id;
      console.log(this.RecipeDetails.filter(item=>item.id==this.recipeid));
      this.selectRecipe=this.RecipeDetails.filter(item=>item.id==this.recipeid);
      console.log(this.selectRecipe);
  });

  }
}
