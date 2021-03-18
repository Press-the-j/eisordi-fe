import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoadArticles } from '../store/articles/articles.actions';
import { LoadMagazines } from '../store/magazines/magazines.actions';
import { MagazinesHttp } from '../store/magazines/magazines.effects';
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
    //console.log('[DISPATCH LOADARTICLES]');
    this.store.dispatch(new LoadArticles);
  }

  loadMagazines(perPage: number): Observable<MagazinesHttp> {
    //console.log('[DISPATCH LOADMAGAZINES]');
    const magazines_top = this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines/top`);
    const magazines_all = this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines?per_page=${perPage}`)
    return combineLatest([
        magazines_top,
        magazines_all
    ]).pipe(
      map((magazines) => {
        return {
          top: magazines[0],
          all: magazines[1]
        }
      })
    )
  }
}
