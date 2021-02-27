import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout.module';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesContainerComponent } from './articles-container/articles-container.component';

const COMPONENTS = [
  ArticlesComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ArticlesContainerComponent
  ],  
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    LayoutModule
  ]
})
export class ArticlesModule { }
