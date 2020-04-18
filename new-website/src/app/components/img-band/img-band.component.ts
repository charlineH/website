import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-band',
  templateUrl: './img-band.component.html',
  styleUrls: ['./img-band.component.scss']
})
export class ImgBandComponent implements OnInit {
  @Input() img?: string;
  @Input() type: 'eye-bonze' | 'ears-bonze' | 'mouse-bonze' | 'roses' | 'taichi' | 'primary' | 'meditation' | 'stage';
  @Input() title: string;
  @Input() cadre: boolean;
  @Input() movingBand: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  getImgClass() {
    let bandName = 'band--default';
    if (this.type) {
      bandName = `band--${ this.type }`;
    } else if (this.img) {
      bandName = `band--img`;
    }
    const cadre = this.cadre ? 'band--with-cadre' : '';
    return `${ bandName } ${ cadre }`;
  }

  getImgStyle() {
    return this.img ? `background-image: url(${ this.img })` : '';
  }
}
