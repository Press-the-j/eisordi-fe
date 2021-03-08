import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { MagazineComponent } from './magazine/magazine.component';
import { PodcastComponent } from './podcast/podcast.component';
import { PoetryComponent } from './poetry/poetry.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
    children: [
      {
        path: 'articoli',
        component: MagazineComponent,// 
      }, 
      {
        path: 'poesie',
        component: PoetryComponent,// 
      },
      {
        path: 'racconti',
        component: StoriesComponent,// 
      },
      {
        path: 'podcast',
        component: PodcastComponent,// 
      },   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
