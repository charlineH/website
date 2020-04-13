import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-taichi',
  templateUrl: './taichi.component.html',
  styleUrls: ['./taichi.component.scss']
})
export class TaichiComponent implements OnInit {

  readonly page = RoutesPath.TAICHI;

  constructor() {
  }

  ngOnInit(): void {
  }

}
