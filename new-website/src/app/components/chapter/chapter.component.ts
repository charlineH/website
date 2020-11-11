import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {

  @Input() title: string;
  @Input() img: string;
  @Input() color: 'primary' | 'secondary' | 'tertiary' | 'grey' = 'tertiary';

  imageLabel: string;

  ngOnInit(): void {
    this.imageLabel = this.img?.split('/')?.reverse()[0].split('.')[0];
  }
}
