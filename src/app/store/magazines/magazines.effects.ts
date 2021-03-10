import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { ArticlesService } from 'src/app/services/articles.service';
import { LogService } from 'src/app/services/dev/log.service';


@Injectable()
export class ArticlesEffects {

    constructor(
        private actions$: Actions,
        private articlesService: ArticlesService,
        private logService: LogService
       
    ) { }

    

}