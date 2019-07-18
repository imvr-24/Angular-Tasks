import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private BASE_URL = 'https://newsapi.org/v2/';
  private ENDPOINTS = ['top-headlines', 'everything', 'sources'];
  private apiKey = 'b85765f3a10a43be9e59ec9706558361';

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get(`${this.BASE_URL}${this.ENDPOINTS[0]}?country=us&apiKey=${this.apiKey}`);
  }

}
