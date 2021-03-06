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
      {
        'id': '4',
        'title': 'quarto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {
        'id': '5',
        'title': 'quinto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {
        'id': '6',
        'title': 'sesto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {
        'id': '7',
        'title': 'settimo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
    ]
    //console.log('mockArticles:' , mockArticles);
    
    return of(mockArticles)
  }

  loadArticlesTop(): Observable<any> {
    //this.http.get<Articles[]>
    const mockArticlesTop = [
      {
        'id': '1',
        'title': 'primo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {
        'id': '2',
        'title': 'secondo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      {
        'id': '3',
        'title': 'terzo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?'
      },
      
    ]
    //console.log('mockArticlesTop:' , mockArticlesTop);
    
    return of(mockArticlesTop)
    
  }
}
