import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesListComponent } from './resources-list.component';

const routes: Routes = [
  {
    path: '',
    component: ResourcesListComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesListRoutingModule { }
