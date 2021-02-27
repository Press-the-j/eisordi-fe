import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../shared/layout.module';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles.component';
import { ArticlesContainerComponent } from './articles-container/articles-container.component';
import { ArticlesService } from '../services/articles.service';

const COMPONENTS = [
  ArticlesComponent,
  ArticlesContainerComponent
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
