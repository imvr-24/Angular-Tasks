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

  @Output() detailsFilled = new EventEmitter<{firstName:string, lastName: string, email: string, phoneNumber: string}>();

  constructor() { }

  ngOnInit() {
  }

  emitDataToParent() {
    this.detailsFilled.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phoneNumber
    });
  }

  clearData() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phoneNumber = '';
  }

}
