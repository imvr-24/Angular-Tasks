import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { FillDetailsComponent } from './fill-details/fill-details.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todos/todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    FillDetailsComponent,
    HeaderComponent,
    NotFoundComponent,
    TodosComponent,
    TodoComponent,
    PostsComponent,
    PostComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
