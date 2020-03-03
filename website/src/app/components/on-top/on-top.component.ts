import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-top',
  templateUrl: './on-top.component.html',
  styleUrls: ['./on-top.component.scss']
})
export class OnTopComponent {

  constructor(private element: ElementRef) { }

  scrollOnTop() {
    this.element.nativeElement.scrollTop = 0;
  }
}
