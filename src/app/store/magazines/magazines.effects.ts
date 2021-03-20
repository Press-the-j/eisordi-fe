import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';
import { ErrorService } from 'src/app/services/error.service';
import { isLoadMagazines } from '../articles/articles.actions';
import { MagazinesActionsTypes, MagazinesFailure, MagazinesLoaded, MagazinesTopLoaded } from './magazines.actions';
import { perPage } from './magazines.selectors';

export class MagazinesHttp {
  top: object;
  all: object;
}
@Injectable()
export class MagazinesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private store: Store,
        private errorService: ErrorService
    ) { }

    @Effect()
    LoadMagazines: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.LOAD_MAGAZINES),
            switchMap(()=> this.store.select(perPage)),
            switchMap((perPage: number) => {
              return this.articlesService.loadMagazines(perPage).pipe(
                tap((magazines: MagazinesHttp) => console.log('MAGAZINES: ', magazines)
                ),
                switchMap((magazines: MagazinesHttp)=>[
                   new MagazinesLoaded(magazines.all),
                   new MagazinesTopLoaded(magazines.top),
                   new isLoadMagazines
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