import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }



  loadMagazines(): Observable<any> {
    //this.http.get<Articles[]>
    const mockMagazines = [
      {
        'id': '1',
        'title': 'primo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '2',
        'title': 'secondo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '3',
        'title': 'terzo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '4',
        'title': 'quarto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '5',
        'title': 'quinto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '6',
        'title': 'sesto articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '7',
        'title': 'settimo articolo',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      
    ]

    const response = {
      "total-page": 1,
      "total-items": 7,
      "current-page": 1,
      "per-page": 10,
      "items": mockMagazines
    }

    console.log('mockArticlesResponse:' , response);
    
    return of(response)
    
  }

  loadPoetry(): Observable<any> {
    //this.http.get<Articles[]>
    const mockPoetry = [
      {
        'id': '1',
        'title': 'primo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '2',
        'title': 'secondo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '3',
        'title': 'terzo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '4',
        'title': 'quarto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '5',
        'title': 'quinto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '6',
        'title': 'sesto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '7',
        'title': 'settimo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      
    ]


    console.log('mockArticlesTop:' , mockPoetry);
    
    return of(mockPoetry)
    
  }

  loadStories(): Observable<any> {
    //this.http.get<Articles[]>
    const mockStories = [
      {
        'id': '1',
        'title': 'primo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '2',
        'title': 'secondo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '3',
        'title': 'terzo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
        'top': true
      },
      {
        'id': '4',
        'title': 'quarto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '5',
        'title': 'quinto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '6',
        'title': 'sesto poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      },
      {
        'id': '7',
        'title': 'settimo poesia',
        'article_img': 'assets/img/articles-img/article-1-img.jpg',
        'content': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore velit dolore vel temporibus animi! Dolores sunt error ipsa quis repudiandae, nulla delectus voluptatum non praesentium? Doloremque iste ipsam reprehenderit fugiat?',
      }
      
    ]


    console.log('mockArticlesTop:' , mockStories);
    
    return of(mockStories)
    
  }
}
