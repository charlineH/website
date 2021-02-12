import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  @Input() left: boolean;
  @Input() img: string;
  @Input() title: string;
  @Input() buttonLabel: string;
  @Input() redirect: string;
  @Input() type: 'secondary' | 'tertiary' | 'grey';

  imageLabel: string;
  isExterneRedirect: boolean;
  isAssetRedirect: boolean;

  ngOnInit(): void {
    this.imageLabel = this.img?.split('/')?.reverse()[0].split('.')[0];
    this.isExterneRedirect = this.redirect && this.redirect.includes('http');
    this.isAssetRedirect = this.redirect && this.redirect.includes('assets');
  }

  openLink() {
    let redirectUrl = this.redirect;
    if (this.isAssetRedirect) {
      redirectUrl = window.location.origin + '/' + redirectUrl;
    }
    window.open(redirectUrl, '_blank');
  }
}
