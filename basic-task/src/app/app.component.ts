import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Default Behavior
})
export class AppComponent {
  title = 'basic-task';

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
  }
}
