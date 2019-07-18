import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsApiRoutingModule } from './news-api-routing.module';
import { NewsApiComponent } from './news-api.component';
import { NewsCardListComponent } from './news-card-list/news-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { LoadingSpinnerComponent } from '../ui/loading-spinner/loading-spinner.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NewsApiComponent, NewsCardListComponent, SpinnerComponent],
  imports: [
    CommonModule,
    NewsApiRoutingModule,
    MatCardModule
  ]
})
export class NewsApiModule { }
