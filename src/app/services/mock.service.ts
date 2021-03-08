import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }



  loadMagazines(): Observable<any> {
    //this.http.get<Articles[]>
    const mockArticles = [
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
    console.log('mockArticlesTop:' , mockArticlesTop);
    
    return of(mockArticles)
    
  }
}
