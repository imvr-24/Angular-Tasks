import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.css']
})
export class ResourcesListComponent implements OnInit {

  resourcesA = [
    { name: 'Angular Docs', referenceLink: 'https://angular.io/resources' },
    { name: 'Alligator', referenceLink: 'https://alligator.io/resources/' },
    { name: 'FreeCodeCamp', referenceLink: 'https://guide.freecodecamp.org/angular/' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
