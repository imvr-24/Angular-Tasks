import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  resourcesA = [
    {name: 'Angular Docs', referenceLink: 'https://angular.io/resources'},
    {name: 'Alligator', referenceLink: 'https://alligator.io/resources/'},
    {name: 'FreeCodeCamp', referenceLink: 'https://guide.freecodecamp.org/angular/'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
