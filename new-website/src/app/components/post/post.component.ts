import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input() title: string;
  @Input() redirect: string;
  @Input() anchor: string;
  @Input() date: string;
  @Input() img?: string;

  constructor(private readonly router: Router) {
  }

  getUrl() {
    let url = `${ window.location.origin }${ this.redirect }`;
    if (this.anchor) {
      url += `?anchor=${ this.anchor }`;
    }
    return url;
  }

  getImgStyle() {
    return this.img ? `background-image: url(${ this.img })` : '';
  }

  redirectToPost() {
    window.open(this.getUrl(), '_blank');
  }
}
