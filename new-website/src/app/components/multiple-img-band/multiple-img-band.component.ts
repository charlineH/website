import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Massage } from '../../model/massage.model';

@Component({
  selector: 'app-multiple-img-band',
  templateUrl: './multiple-img-band.component.html',
  styleUrls: ['./multiple-img-band.component.scss']
})
export class MultipleImgBandComponent implements OnInit {
  @Input() images: Massage[];
  @Output() select: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
