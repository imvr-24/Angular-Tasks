import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTypesListComponent } from './form-types-list/form-types-list.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { StartComponent } from './start/start.component';
import { FormsFeaturesComponent } from './forms-features.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: FormsFeaturesComponent,
    children: [
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'tdf',
        component: TemplateDrivenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsFeaturesRoutingModule { }
