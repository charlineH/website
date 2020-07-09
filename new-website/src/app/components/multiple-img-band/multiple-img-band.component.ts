import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageItem } from '../../model/massage.model';

@Component({
  selector: 'app-multiple-img-band',
  templateUrl: './multiple-img-band.component.html',
  styleUrls: ['./multiple-img-band.component.scss']
})
export class MultipleImgBandComponent implements OnInit {
  @Input() images: ImageItem[];
  @Output() selectItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
