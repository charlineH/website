import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-shiatsu',
  templateUrl: './shiatsu.component.html',
  styleUrls: ['./shiatsu.component.scss']
})
export class ShiatsuComponent implements OnInit {

  readonly page = RoutesPath.SHIATSU;

  constructor() {
  }

  ngOnInit(): void {
  }

}
