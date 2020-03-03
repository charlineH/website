import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() type: 'taichi' | 'massage' | 'shiatsu' | 'entreprise';
  @Input() text: string;

  getIcon(): string {
  let icon: string;
    switch(this.type) {
      case 'taichi':
        icon = 'tai-chi';
        break;
      case 'massage':
        icon = 'massage';
        break;
      case 'entreprise':
        icon = 'building';
        break;
      case 'shiatsu':
      default:
        icon = 'shiatsu'
    }
  return icon;
  }

}
