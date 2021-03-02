import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor() { }

  loadArticles(): Observable<object[]> {
    //this.http.loadArticles
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
}
