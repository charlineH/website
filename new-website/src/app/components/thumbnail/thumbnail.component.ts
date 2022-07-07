import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from '../../enum/routes.enum';

@Component({
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() type: 'taichi' | 'massage' | 'shiatsu' | 'entreprise';
  @Input() text: string;

  constructor(private router: Router) {
  }

  getIcon(): string {
    let icon: string;
    switch (this.type) {
      case 'taichi':
        icon = 'tai-chi';
        break;
      case 'massage':
        icon = 'massage';
        break;
      case 'entreprise':
        icon = 'balance';
        break;
      case 'shiatsu':
      default:
        icon = 'shiatsu';
    }
    return icon;
  }

  getColorClasses(): string {
    let color: string;
    switch (this.type) {
      case 'taichi':
      default:
        color = 'primary';
        break;
      case 'shiatsu':
        color = 'tertiary';
        break;
      case 'massage':
        color = 'quaternary';
        break;
      case 'entreprise':
        color = 'secondary';
        break;
    }
    return `thumbnail--${ color }`;
  }

  redirectTo(): void {
    let redirect: RoutesPath;
    switch (this.type) {
      case 'taichi':
        redirect = RoutesPath.TAICHI;
        break;
      case 'massage':
        redirect = RoutesPath.MASSAGE;
        break;
      case 'entreprise':
        redirect = RoutesPath.ENTREPRISE;
        break;
      case 'shiatsu':
      default:
        redirect = RoutesPath.SHIATSU;
    }
    this.router.navigateByUrl(redirect);
  }

}
