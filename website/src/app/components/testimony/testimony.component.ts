import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  @Input() author: string;
  @Input() small: boolean;

  color: 'blue' | 'yellow' | 'pink';

  ngOnInit(): void {
    const random = Math.floor(Math.random() * Math.floor(3));
    switch (random) {
      case 0:
        this.color = 'blue';
        break;
      case 1:
        this.color = 'yellow';
        break;
      default :
        this.color = 'pink';
        break;
    }
  }

}
