import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';
import { LogService } from 'src/app/services/dev/log.service';
import { ErrorService } from 'src/app/services/error.service';
import { isLoadMagazines } from '../articles/articles.actions';
import { ChangeMagazinesPagerFilter, LoadMagazinesPerPage, MagazinesActionsTypes, MagazinesFailure, MagazinesLoaded, MagazinesPagerFilterChanged, MagazinesTopLoaded } from './magazines.actions';


@Injectable()
export class MagazinesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private store: Store,
        private errorService: ErrorService,
        private log : LogService,
    ) { }

    @Effect()
    ResolveMagazines: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.RESOLVE_MAGAZINES),
            switchMap(() => {
              return this.articlesService.loadMagazines().pipe(
                tap((magazines) => console.log('MAGAZINES LOAD: ', magazines)
                ),
                switchMap((magazines)=>[
                   new MagazinesLoaded(magazines),
                   new isLoadMagazines
                ]),
                catchError((error) => {
                  return of(new MagazinesFailure(error))
                })
              )
            })
          );
    
    @Effect()
    ChangeMagazinesPageFilter: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.CHANGE_MAGAZINES_PAGER_FILTER),
            switchMap((action: ChangeMagazinesPagerFilter) => {
              return this.articlesService.loadMagazines(action.payload).pipe(
                tap((magazines) => console.log('MAGAZINES: ', magazines)
                ),
                map((magazines)=>
                  new MagazinesPagerFilterChanged(magazines),
                ),
                catchError((error) => {
                  return of(new MagazinesFailure(error))
                })
              )
            })
          );
    @Effect()
    LoadMagazinesPerPage: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.LOAD_MAGAZINES_PER_PAGE),
            switchMap((action: LoadMagazinesPerPage) => {
              return this.articlesService.loadMagazines(action.payload.per_page, action.payload.page).pipe(
                tap((magazines) => console.log('MAGAZINES: ', magazines)
                ),
                switchMap((magazines)=>[
                   new MagazinesLoaded(magazines),
                ]),
                catchError((error) => {
                  return of(new MagazinesFailure(error))
                })
              )
            })
          );
    @Effect({dispatch : false})
    MagazinesFailure: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.MAGAZINES_FAILURE),
            map((action: MagazinesFailure) => this.errorService.alertError(action.payload))
          )
}