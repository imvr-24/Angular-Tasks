import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FillDetailsComponent } from './fill-details/fill-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ResourcesComponent } from './resources/resources.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';


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
    { path: 'todos', component: TodosComponent,
        children: [
            { path: ':id', component: TodoComponent }
        ]},
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
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
