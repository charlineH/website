import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit {

  readonly page = RoutesPath.GALLERY;

  constructor() {
  }

  ngOnInit(): void {
  }

}
