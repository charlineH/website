import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent implements OnInit {
  @Input() author: string;
  @Input() type: string;
  @Input() color: 'tertiary' | 'secondary' | 'primary' | 'grey';

  ngOnInit(): void {
    if (!this.color) {
      const random = Math.floor(Math.random() * Math.floor(3));
      switch (random) {
        case 0:
          this.color = 'tertiary';
          break;
        case 1:
          this.color = 'secondary';
          break;
        default :
          this.color = 'primary';
          break;
      }
    }
  }

}
