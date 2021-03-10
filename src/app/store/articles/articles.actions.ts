import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
  LOAD_ARTICLES = '[ARTICLES] Load articles',
  LOAD_MAGAZINES = '[ARTICLES] Load magazines',
  ARTICLES_SUCCESS = '[ARTICLES] Load articles success',
  ARTICLES_FAILURE = '[ARTICLES] Load articles failure',
}

export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export class LoadMagazines implements Action {
  readonly type = ArticlesActionsTypes.LOAD_MAGAZINES;
  constructor() { }
}
export class ArticlesFailure implements Action {
  readonly type = ArticlesActionsTypes.ARTICLES_FAILURE;
  constructor(public payload: any) { }
}

export type All =
      LoadArticles
    | LoadMagazines
    | ArticlesFailure