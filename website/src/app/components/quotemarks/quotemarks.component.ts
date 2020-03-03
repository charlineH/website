import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotemarks',
  templateUrl: './quotemarks.component.html',
  styleUrls: ['./quotemarks.component.scss']
})
export class QuotemarksComponent implements OnInit {
  @Input() text: string;
  @Input() author: string;

  constructor() { }

  ngOnInit(): void {
  }

}
