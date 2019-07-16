import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesListRoutingModule } from './resources-list-routing.module';
import { ResourcesListComponent } from './resources-list.component';
import { ResourcesComponent } from './resources/resources.component';

@NgModule({
  declarations: [ResourcesListComponent, ResourcesComponent],
  imports: [
    CommonModule,
    ResourcesListRoutingModule
  ]
})
export class ResourcesListModule { }
