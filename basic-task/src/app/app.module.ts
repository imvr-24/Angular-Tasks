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
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FillDetailsComponent
  },
  {
    path: 'features',
    component: ShowDetailsComponent
  },
  {
    path: 'resources',
    component: ResourcesComponent
  },
  {
    path: 'page-not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    FillDetailsComponent,
    HeaderComponent,
    ResourcesComponent,
    ListComponent,
    NotFoundComponent
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
