import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FillDetailsComponent } from './fill-details/fill-details.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './resources/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: FillDetailsComponent
  },
  {
    path: 'home',
    component: FillDetailsComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    FillDetailsComponent,
    HeaderComponent,
    ResourcesComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
