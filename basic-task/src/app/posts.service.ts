import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PostModel } from './models/posts.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private http: HttpClient,
  ) { }

  getPost(id: number): Observable<PostModel> {
    return this.http.get<PostModel>(`${this.BASE_URL}/${id}`)
  }

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(`${this.BASE_URL}?_sort=views&_order=desc`)
  }

}

