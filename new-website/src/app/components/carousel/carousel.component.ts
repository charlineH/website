import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() multiple: boolean;
  @Input() type: 'taichi' | 'massage' | 'shiatsu' | 'entreprise';

  constructor() {
  }

  ngOnInit(): void {
  }

}
