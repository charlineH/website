import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements OnInit {

  readonly page = RoutesPath.MASSAGE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
