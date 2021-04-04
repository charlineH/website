import { Component, Input } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  @Input() page: RoutesPath;

  readonly homePage = RoutesPath.HOME;
  readonly taichiPage = RoutesPath.TAICHI;
  readonly massagePage = RoutesPath.MASSAGE;
  readonly shiatsuPage = RoutesPath.SHIATSU;
  readonly entreprisePage = RoutesPath.ENTREPRISE;
  readonly aProposPage = RoutesPath.A_PROPOS;

  displayMobileMenu: boolean;

  showHideMenu() {
    this.displayMobileMenu = !this.displayMobileMenu;
  }

  hideMenu() {
    this.displayMobileMenu = false;
  }
}
