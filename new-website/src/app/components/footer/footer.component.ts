import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  meContacter() {
    window.location.href = 'mailto:mlh@humoe.fr';
  }
}
