import { Component } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  readonly page = RoutesPath.HOME;

  images = [{img: 'truc', title: 'truc'}, {img: 'truc2', title: 'truc2'}];

}
