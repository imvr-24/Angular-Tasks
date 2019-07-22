import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { PaginationService } from '../pagination.service';

@Component({
  selector: 'app-news-api',
  templateUrl: './news-api.component.html',
  styleUrls: ['./news-api.component.css']
})
export class NewsApiComponent implements OnInit {

  news = [];
  showSpinner = true;
  private allItems = [];

  // pager object.
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private newsService: NewsService, private pagerService: PaginationService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getNews();
    }, 100);
  }

  getNews() {
    this.newsService.getTopHeadlines().subscribe(latestNews => {
      this.allItems = latestNews['articles'];
      this.showSpinner = false;
      this.news = latestNews['articles'];
      this.setPage(1);
      console.log(this.pager.pages && this.pager.pages.length);
      console.log(this.pagedItems);
      console.log(this.pager);
    });
  }
  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    console.log(this.pager);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
