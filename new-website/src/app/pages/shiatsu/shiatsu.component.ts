import { Component, ElementRef } from '@angular/core';
import { RoutesPath } from '../../enum/routes.enum';
import { HasTitle } from '../../model/has-title.model';

@Component({
  templateUrl: './shiatsu.component.html',
  styleUrls: ['./shiatsu.component.scss'],
})
export class ShiatsuComponent implements HasTitle {
  readonly page = RoutesPath.SHIATSU;

  title = 'Shiatsu au Mans (72) | Humoe';

  constructor(private el: ElementRef) {
  }

  goToChapter1() {
    this.scrollToAnchor('bienfaits');
  }

  goToChapter2() {
    this.scrollToAnchor('origine');
  }

  goToChapter3() {
    this.scrollToAnchor('deroulement');
  }

  private scrollToAnchor(anchor: string): void {
    try {
      if (anchor) {
        const toScrollEl = this.el.nativeElement.querySelector(`#${anchor}`);
        toScrollEl.scrollIntoView();
      }
    } catch (e) {
      console.error('Scoll impossible', e);
    }
  }
}
