import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import data from './ressources.json';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {
  resource;

  constructor(private readonly route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const resourceId = this.route.snapshot.params?.id;
    this.resource = data[resourceId];
  }

}
