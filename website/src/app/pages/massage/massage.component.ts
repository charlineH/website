import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-massage',
  templateUrl: './massage.component.html',
  styleUrls: ['./massage.component.scss']
})
export class MassageComponent implements OnInit, AfterViewChecked {

  readonly page = RoutesPath.MASSAGE;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.scrollToAnchor(this.route.snapshot.queryParams.anchor);
  }

  scrollToAnchor(anchor: string): void {
    try {
      if (anchor) {
        document.querySelector(`#${ anchor }`).scrollIntoView();
      }
    } catch (e) {
      console.error('Scoll impossible', e);
    }
  }

}
