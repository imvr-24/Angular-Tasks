import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsFeaturesRoutingModule } from './forms-features-routing.module';
import { FormsModule } from '@angular/forms';
import { FormTypesListComponent } from './form-types-list/form-types-list.component';
import { FormsFeaturesComponent } from './forms-features.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [FormTypesListComponent, FormsFeaturesComponent, TemplateDrivenComponent, StartComponent],
  imports: [
    CommonModule,
    FormsFeaturesRoutingModule,
    FormsModule
  ]
})
export class FormsFeaturesModule { }
