import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card-list',
  templateUrl: './news-card-list.component.html',
  styleUrls: ['./news-card-list.component.css']
})
export class NewsCardListComponent implements OnInit {

  constructor() { }

  defaultImage = {
    newsImg : 'assets/news.jpg'
  };

  @Input() news;

  ngOnInit() {
  }

}
