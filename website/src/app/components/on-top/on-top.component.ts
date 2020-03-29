import { Component } from '@angular/core';

@Component({
  selector: 'app-on-top',
  templateUrl: './on-top.component.html',
  styleUrls: ['./on-top.component.scss']
})
export class OnTopComponent {

  constructor() {
  }

  scrollOnTop() {
    window.scrollTo(0, 0);
  }
}
