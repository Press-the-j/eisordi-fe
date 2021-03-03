import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  loadArticles(): Observable<any> {
    //this.http.get<Articles[]>
    const mockArticles = [
      {'title': 1},
      {'title': 1},
      {'title': 1},
      {'title': 1},
      {'title': 1},
    ]
    console.log('mockArticles:' , mockArticles);
    
    return of(mockArticles)
  }

  loadArticlesTop(): Observable<any> {
    //this.http.get<Articles[]>
    const mockArticlesTop = [
      {
        'title': 'primo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {'title': 1},
      {'title': 1},
    ]
    console.log('mockArticlesTop:' , mockArticlesTop);
    
    return of(mockArticlesTop)
    
  }
}
