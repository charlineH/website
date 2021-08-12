import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.scss']
})
export class AProposComponent implements OnInit {

  readonly page = RoutesPath.A_PROPOS;

  constructor() {
  }

  ngOnInit(): void {
  }

}
