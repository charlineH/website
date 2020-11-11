import { Component, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { HasTitle } from './model/has-title.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(RouterOutlet) outlet;

  constructor(
    readonly router: Router,
    readonly title: Title
  ) {
    router.events.pipe(
      filter(r => r instanceof NavigationEnd)).forEach(() => {
      const component = this.outlet.component as HasTitle;
      title.setTitle(component.title || ' Massages bien-être, Tai Chi & Qi Gong, Méditation, au Mans (72) | Humoe');
    });

  }

}
