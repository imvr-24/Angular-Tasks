import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, PreloadingStrategy } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NetworkAwarePreloadStrategyService } from './network-aware-preload-strategy.service';
import { CustomPreloaderService } from './custom-preloader.service';
import { NewsApiComponent } from './news-api/news-api.component';



const routes: Routes = [

    {
        path: 'features',
        component: ShowDetailsComponent
    },
    {
        path: 'resources',
        loadChildren: './resources-list/resources-list.module#ResourcesListModule',
        data: { preload: true }  // Custom property we will use to track what route to be preloaded
    },
    {
        path: 'forms',
        loadChildren: () => import('./forms-features/forms-features.module').then(module => module.FormsFeaturesModule)
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
        RouterModule.forRoot(routes, {
            useHash: true,
            // preloadingStrategy: CustomPreloaderService
            // preloadingStrategy: NetworkAwarePreloadStrategyService
            // preloadingStrategy: PreloadAllModules,
            // enableTracing: true
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
