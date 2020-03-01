import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  displayMobileMenu: boolean;

  showHideMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

  hideMenu() {
    this.displayMobileMenu = false;
  }
}
