import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-band',
  templateUrl: './img-band.component.html',
  styleUrls: ['./img-band.component.scss']
})
export class ImgBandComponent implements OnInit {
  @Input() img?: string;
  @Input() type: 'eye-bonze' |'ears-bonze' |'mouse-bonze' |'roses' | 'taichi' | 'primary';
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  getImgClass() {
    if (this.type) {
      return `band--${this.type}`
    } else if (this.img) {
      return `band--img`;
    }
    return 'band--default';
  }
}
