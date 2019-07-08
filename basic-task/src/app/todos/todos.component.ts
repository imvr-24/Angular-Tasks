import { TodosService } from './../todos.service';
import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { TodoModel } from '../models/todo.model';
import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnDestroy, OnChanges {

  todos: TodoModel[] = [];

  noOfTodos = 0;

  private activatedSubscription: Subscription;

  constructor(private todoService: TodosService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
    this.activatedSubscription = this.todoService.completedTodos.subscribe( completedTodos => {
      console.log(completedTodos);
      this.noOfTodos = completedTodos;
    });
  }

  ngOnChanges() { }

  getUsers(): void {
    this.todoService.getTodos()
    .subscribe(todo => this.todos = todo.filter(tod => tod.completed === false));
  }

  ngOnDestroy() {
    this.activatedSubscription.unsubscribe();
  }

  navigateToPosts() {
    this.router.navigate(['/posts']);
  }

}
