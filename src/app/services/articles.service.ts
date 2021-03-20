import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, forkJoin, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ResolveArticles } from '../store/articles/articles.actions';
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
    //console.log('[DISPATCH LOADARTICLES]');
    this.store.dispatch(new ResolveArticles);
  }

  resolveMagazines(): Observable<any> {
    //console.log('[DISPATCH LOADMAGAZINES]');
    const magazines_top = this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines/top`);
    const magazines_page = this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines?per_page=1`)
    return combineLatest([
        magazines_top,
        magazines_page
    ]).pipe(
      map((magazines) => {
        return {
          top: magazines[0],
          perPage: magazines[1]
        }
      })
    )
  }

  loadMagazinesPerPage(page: number): Observable<any> {
    return this.http.get<object[]>(`${this.apiBaseUrl}/api/articles/magazines?per_page=${page}`)
  }
}
