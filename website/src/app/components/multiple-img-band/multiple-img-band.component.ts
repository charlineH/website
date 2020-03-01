import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-img-band',
  templateUrl: './multiple-img-band.component.html',
  styleUrls: ['./multiple-img-band.component.scss']
})
export class MultipleImgBandComponent implements OnInit {
  @Input() images: {img: string, title: string}[];

  constructor() { }

  ngOnInit(): void {
  }

}
