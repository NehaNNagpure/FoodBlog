import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Recipe',
            link: './recipe',
            index: 0
        }, {
            label: 'MyAccount',
            link: './recipe',
            index: 1
        }
        
    ];
}




ngOnInit(): void {
 
}

}


