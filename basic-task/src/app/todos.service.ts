import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  completedTodos = new Subject<number>();

  constructor(private http: HttpClient) { }

  BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

  todoList = new Subject();

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.BASE_URL);
  }

}
