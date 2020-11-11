import { Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { HasTitle } from '../../model/has-title.model';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.scss']
})
export class GallerieComponent implements OnInit, HasTitle {

  readonly page = RoutesPath.GALLERY;

  title = 'Gallerie photo | Humoe';

  constructor() {
  }

  ngOnInit(): void {
  }

}
