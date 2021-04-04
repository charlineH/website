import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  @Input() multiple: boolean;
  @Input() type: 'taichi' | 'massage' | 'shiatsu' | 'entreprise' | 'about';

  constructor() {
  }

  ngOnInit(): void {
  }

}
