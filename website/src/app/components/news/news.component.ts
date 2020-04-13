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
  @Input() type: 'yellow' | 'blue' | 'grey';

  imageLabel: string;

  ngOnInit(): void {
    this.imageLabel = this.img?.split('/')?.reverse()[0].split('.')[0];
  }
}
