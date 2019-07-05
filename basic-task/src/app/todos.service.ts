import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<TodoModel[]> {
    return this.http.get<TodoModel[]>(this.BASE_URL);
  }

}
