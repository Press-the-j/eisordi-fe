import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { ArticlesActionsTypes, LoadArticles, LoadArticlesFailure } from './articles.actions';
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
                }),
                catchError((error) => {
                  return of(new LoadArticlesFailure(error));
                }),
              )
            }),
          );

}