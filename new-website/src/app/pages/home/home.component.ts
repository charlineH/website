import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly page = RoutesPath.HOME;

  images = [{img: 'truc', title: 'truc'}, {img: 'truc2', title: 'truc2'}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
