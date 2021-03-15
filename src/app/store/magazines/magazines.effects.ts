import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ArticlesService } from 'src/app/services/articles.service';
import { LogService } from 'src/app/services/dev/log.service';
import { ArticlesActionsTypes, isLoadMagazines } from '../articles/articles.actions';
import { MagazinesActionsTypes, MagazinesFailure, MagazinesLoaded } from './magazines.actions';


@Injectable()
export class MagazinesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private logService: LogService
       
    ) { }

    @Effect()
    LoadMagazines: Observable<any> = this.actions$
          .pipe(
            ofType(MagazinesActionsTypes.LOAD_MAGAZINES),
            switchMap(() => {
              return this.articlesService.loadMagazines().pipe(
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

}