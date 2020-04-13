import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent {

  @Input() title: string;
  @Input() img: string;

}
