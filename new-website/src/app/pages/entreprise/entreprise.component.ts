import { AfterViewInit, Component } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.scss']
})
export class EntrepriseComponent implements AfterViewInit {
  readonly page = RoutesPath.ENTREPRISE;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngAfterViewInit(): void {
    this.scrollToAnchor(this.route.snapshot.queryParams.anchor);
  }

  goToQuatrePilier() {
    window.open('https://www.quatrepiliers.fr/', '_blank');
  }

  goToChapter1() {
    this.scrollToAnchor('taichi');
  }

  goToChapter2() {
    this.scrollToAnchor('ateliers');
  }

  goToChapter3() {
    this.scrollToAnchor('massages-minute');
  }

  private scrollToAnchor(anchor: string): void {
    try {
      if (anchor) {
        document.querySelector(`#${ anchor }`).scrollIntoView();
      }
    } catch (e) {
      console.error('Scoll impossible', e);
    }
  }

}
