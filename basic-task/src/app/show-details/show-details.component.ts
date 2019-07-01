import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  // @Input() data: {firstName:string, lastName: string, email: string, phoneNumber: string};

  detailsStore = [];

  storeDetails(data: {firstName:string, lastName: string, email: string, phoneNumber: string}) {
    this.detailsStore.push(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber
      }
    );
    console.log(this.detailsStore);
  }

  constructor() { }

  ngOnInit() {
  }

}
