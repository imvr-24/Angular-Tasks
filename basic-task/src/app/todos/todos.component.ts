import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../models/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoModel[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.todoService.getTodos()
    .subscribe(todos => this.todos = todos);
  }

}
