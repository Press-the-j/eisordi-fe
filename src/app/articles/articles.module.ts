import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout.module';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';
import { ArticlesService } from '../services/articles.service';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import { ArticlesTopComponent } from './components/articles-top/articles-top.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PoetryComponent } from './poetry/poetry.component';
import { StoriesComponent } from './stories/stories.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PagerComponent } from './components/pager/pager.component'

const COMPONENTS = [
  ArticlesComponent,
  ArticlesContainerComponent,
  ArticleCardComponent,
  ArticlesTopComponent,
  PodcastComponent,
  PoetryComponent,
  StoriesComponent,
  MagazineComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    PagerComponent,
  ],  
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    LayoutModule
  ],
  providers: [
    ArticlesService
  ]
})
export class ArticlesModule { }
