import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadArticles } from '../store/articles/articles.actions';
import { LoadMagazines } from '../store/magazines/magazines.actions';
import { MockService } from './mock.service';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiBaseUrl = environment.apiBaseUrl
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
    console.log('[DISPATCH LOADMAGAZINES]');
    return this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines?per_page=5`)
  }
}
