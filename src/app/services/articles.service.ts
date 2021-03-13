import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadArticles } from '../store/articles/articles.actions';
import { MockService } from './mock.service';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(
    private store: Store,
    private http: HttpClient,
    private mock: MockService
  ) { }

  loadArticles(): void {
    console.log('[DISPATCH LOADARTICLES]');
    this.store.dispatch(new LoadArticles);
  }

  loadMagazines(): Observable<object[]> {
    console.log('[DISPATCH LOADARTICLES]');
    return this.http.get<object[]>('http://127.0.0.1:8000/api/articles/magazines')
  }
}
