import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  loadArticles(): Observable<object[]> {
    //this.http.loadArticles
    const mock = [
      {'title': 1},
      {'title': 1},
      {'title': 1},
      {'title': 1},
      {'title': 1},
    ]
    console.log('mock:' , mock);
    
    return of(mock)
  }
}
