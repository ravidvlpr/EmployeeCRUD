import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  Menus: Object;
  path: string = "['/counter']";
  constructor() { }

  ngOnInit(): void {
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
