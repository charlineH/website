import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images = [ { img: 'truc', title: 'truc'}, {img: 'truc2', title: 'truc2'}];

  constructor() { }

  ngOnInit(): void {
  }

}
