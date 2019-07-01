import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillDetailsComponent } from './fill-details/fill-details.component';

const routes: Routes = [
  {
    path: '',
    component: FillDetailsComponent
  },
  {
    path: 'home',
    component: FillDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

