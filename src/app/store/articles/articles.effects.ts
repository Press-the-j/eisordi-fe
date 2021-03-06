import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { ArticlesActionsTypes, LoadArticles, LoadArticlesFailure, LoadArticlesTop, ReduceArticlesAll, ReduceArticlesTop } from './articles.actions';
import { ArticlesService } from 'src/app/services/articles.service';
import { LogService } from 'src/app/services/dev/log.service';


@Injectable()
export class ArticlesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private logService: LogService
       
    ) { }

    @Effect()
    LoadArticles: Observable<any> = this.actions$
          .pipe(
            ofType(ArticlesActionsTypes.LOAD_ARTICLES),
            switchMap((action: LoadArticles) => {
              return this.articlesService.loadArticles().pipe(
                map((response)=>{
                  this.logService.logThis("loadArticlesAll:",response);
                  return new ReduceArticlesAll(response);
                }),
                catchError((error) => {
                  return of(new LoadArticlesFailure(error));
                }),
              )
            }),
          );
    @Effect()
    LoadArticlesTop: Observable<any> = this.actions$
          .pipe(
            ofType(ArticlesActionsTypes.LOAD_ARTICLES_TOP),
            switchMap((action: LoadArticlesTop)=>{
              return this.articlesService.loadArticlesTop().pipe(
                map((response)=>{
                  this.logService.logThis("loadArticlesTop:",response);
                  return new ReduceArticlesTop(response);
                }),
                catchError((error) => {
                  return of(new LoadArticlesFailure(error));
                })
              )
            }),
          );
    
    @Effect()
    LoadArticlesFailure: Observable<any> = this.actions$
          .pipe(
            ofType(ArticlesActionsTypes.LOAD_ARTICLES_FAILURE),
            map((error)=>{
              this.logService.logThis("error", error)
            })
  
            
          );
}