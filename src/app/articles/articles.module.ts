import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout.module';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesContainerComponent } from './components/articles-container/articles-container.component';
import { ArticlesService } from '../services/articles.service';
import { ArticleCardComponent } from './components/articles-container/article-card/article-card.component';
import { ArticlesTopComponent } from './components/articles-container/articles-top/articles-top.component'

const COMPONENTS = [
  ArticlesComponent,
  ArticlesContainerComponent,
  ArticleCardComponent,
  ArticlesTopComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
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
