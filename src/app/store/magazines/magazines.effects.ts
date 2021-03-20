import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';
import { ErrorService } from 'src/app/services/error.service';
import { isLoadMagazines } from '../articles/articles.actions';
import { LoadMagazinesPerPage, MagazinesActionsTypes, MagazinesFailure, MagazinesLoaded, MagazinesTopLoaded } from './magazines.actions';


@Injectable()
export class MagazinesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private store: Store,
        private errorService: ErrorService
    ) { }

    @Effect()
    ResolveMagazines: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.RESOLVE_MAGAZINES),
            switchMap(() => {
              return this.articlesService.resolveMagazines().pipe(
                tap((magazines) => console.log('MAGAZINES LOAD: ', magazines)
                ),
                switchMap((magazines)=>[
                   new MagazinesLoaded(magazines.perPage),
                   new MagazinesTopLoaded(magazines.top),
                   new isLoadMagazines
                ]),
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
              return this.articlesService.loadMagazinesPerPage(action.payload).pipe(
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