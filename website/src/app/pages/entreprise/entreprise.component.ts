import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements OnInit {

  readonly page = RoutesPath.ENTREPRISE;

  constructor() {
  }

  ngOnInit(): void {
  }

}
