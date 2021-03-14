import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, tap, finalize } from 'rxjs/operators';
import { ArticlesActionsTypes} from './articles.actions';
import { ArticlesService } from 'src/app/services/articles.service';
import { LogService } from 'src/app/services/dev/log.service';
import { LoadMagazines } from '../magazines/magazines.actions';


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
            switchMap(res => [
              new LoadMagazines()
              /* new LoadPoetries();
              new LoadPodcasts();
              new LoadStories(); */
            ]),
          );


     
      /* @Effect({dispatch: false})
      LoadPoetries: Observable<any> = this.actions$
            .pipe(
              ofType(ArticlesActionsTypes.LOAD_POETRIES),
              switchMap(() => {
                return this.articlesService.loadPoetries.pipe(
                  map((poetries)=>{
                    new PoetriesLoaded(poetries);
                  }),
                  catchError((error) => {
                    return of(new PoetriesFailure(error))
                  })
                )
              })
            ); */
      /* @Effect({dispatch: false})
      LoadStories: Observable<any> = this.actions$
            .pipe(
              ofType(ArticlesActionsTypes.LOAD_STORIES),
              switchMap(() => {
                return this.articlesService.loadStories.pipe(
                  map((stories)=>{
                    new StoriesLoaded(stories);
                  }),
                  catchError((error) => {
                    return of(new StoriesFailure(error))
                  })
                )
              })
            ); */
      /* @Effect({dispatch: false})
      LoadPodcasts: Observable<any> = this.actions$
            .pipe(
              ofType(ArticlesActionsTypes.LOAD_PODCASTS),
              switchMap(() => {
                return this.articlesService.loadPodcasts.pipe(
                  map((podcasts)=>{
                    new PodcastsLoaded(podcasts);
                  }),
                  catchError((error) => {
                    return of(new PodcastsFailure(error))
                  })
                )
              })
            ); */
    


    
    @Effect()
    ArticlesFailure: Observable<any> = this.actions$
          .pipe(
            ofType(ArticlesActionsTypes.ARTICLES_FAILURE),
            map((error)=>{
              this.logService.logThis("error", error)
              alert(error);
            })
  
            
          );
}