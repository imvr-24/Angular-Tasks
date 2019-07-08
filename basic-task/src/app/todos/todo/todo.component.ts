import { TodoModel } from './../../models/todo.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // todo: {id: number};
  // paramSubscription;

  @Input('sTodo') todos = [];

  todoList: TodoModel[] = [];
  selectedIndex: number;
  completedTodos = 0;

  constructor(private todoService: TodosService) { }

  ngOnInit() { }



  public setDivIndex(index: number) {
    this.selectedIndex = index;
  }

  markAsDone(index: number) {
    this.completedTodos++;
    console.log(this.todos[index]);
    this.todos.splice(index, 1);
    console.log('Deleted :' + this.todos[index]);
    this.todoService.completedTodos.next(this.completedTodos);
  }

  }


