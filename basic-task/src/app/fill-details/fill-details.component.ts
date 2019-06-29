import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fill-details',
  templateUrl: './fill-details.component.html',
  styleUrls: ['./fill-details.component.css']
})
export class FillDetailsComponent implements OnInit {

  firstName = '';
  lastName = '';
  email = '';
  phoneNumber = '';

  @Output() detailesFilled = new EventEmitter<{firstName:string, lastName: string, email: string, phoneNumber: string}>();

  constructor() { }

  ngOnInit() {
  }

  emitDataToParent() {
    this.detailesFilled.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber
    });
  }

}
