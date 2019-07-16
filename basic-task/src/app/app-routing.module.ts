import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { FillDetailsComponent } from './fill-details/fill-details.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { PostsComponent } from './posts/posts.component';



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
        loadChildren: './resources-list/resources-list.module#ResourcesListModule'
    },
    {
        path: 'forms',
        loadChildren:  () => import('./forms-features/forms-features.module').then(module => module.FormsFeaturesModule)
    },
    {
        path: 'todos', component: TodosComponent,
        children: [
            { path: ':id', component: TodoComponent }
        ]
    },
    {
        path: 'posts', component: PostsComponent
    },
    // {
    //     path: 'page-not-found',
    //     component: NotFoundComponent
    // },
    // {
    //     path: '**',
    //     redirectTo: 'page-not-found'
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
