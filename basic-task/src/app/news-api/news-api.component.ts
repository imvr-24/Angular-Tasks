import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {

  news = [];
  showSpinner = true;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getNews();
    }, 100);
  }

  getNews() {
    this.newsService.getTopHeadlines().subscribe(latestNews => {
      this.showSpinner = false;
      return this.news = latestNews['articles'];
    });
  }
}
