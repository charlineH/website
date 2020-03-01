import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-band',
  templateUrl: './img-band.component.html',
  styleUrls: ['./img-band.component.scss']
})
export class ImgBandComponent implements OnInit {
  @Input() img?: string;
  @Input() type: 'bonze' |'bonze-ouie' |'bonze-parole' |'roses' | 'taichi';
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

  getImgClass() {
    if (this.type) {
      return `img-band--${this.type}`
    }

    return '';
  }
}
