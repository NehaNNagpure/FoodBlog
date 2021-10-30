import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

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
            link: './Recipe',
            index: 0
        }, {
            label: 'MyAccount',
            link: './Recipe',
            index: 1
        }
    ];
}
// ngOnInit(): void {
//   this.router.events.subscribe((res) => {
//       this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
//   });

ngOnInit(): void {
}

}


