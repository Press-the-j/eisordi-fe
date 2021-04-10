import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResolveArticles } from '../store/articles/articles.actions';
import { Pager } from '../constants/pager-constant.js'
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  apiBaseUrl = environment.apiBaseUrl

  constructor(
    private store: Store,
    private http: HttpClient,
  ) { }

  resolveArticles(): void {
    this.store.dispatch(new ResolveArticles);
  }

  loadMagazines(perPage: number = Pager.PER_PAGE, page:number = 1): Observable<any> {
    return this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines?per_page=${perPage}&page=${page}`)
  }
}
