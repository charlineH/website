import { Component } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { HasTitle } from '../../model/has-title.model';

@Component({
  templateUrl: './shiatsu.component.html',
  styleUrls: ['./shiatsu.component.scss']
})
export class ShiatsuComponent implements HasTitle {

  readonly page = RoutesPath.SHIATSU;

  title = 'Shiatsu au Mans (72) | Humoe';

}
