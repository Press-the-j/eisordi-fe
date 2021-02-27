import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
  LOAD_ARTICLES = '[ARTICLES] Load articles',
  LOAD_ARTICLES_SUCCESS = '[ARTICLES] Load articles success',
  LOAD_ARTICLES_FAILURE = '[ARTICLES] Load articles failure',

}

export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export class LoadArticlesSuccess implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES_SUCCESS;
  constructor(public payload: any) { }
}
export class LoadArticlesFailure implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES_FAILURE;
  constructor(public payload: any) { }
}

export type All =
      LoadArticles
    | LoadArticlesFailure
    | LoadArticlesSuccess; 