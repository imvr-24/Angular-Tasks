import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-types-list',
  templateUrl: './form-types-list.component.html',
  styleUrls: ['./form-types-list.component.css']
})
export class FormTypesListComponent implements OnInit {

  formTypes = ['Template Driven', 'Reactive'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  navigateTo(pathE: string) {
    this.router.navigate([pathE], {relativeTo: this.route});
  }
}
