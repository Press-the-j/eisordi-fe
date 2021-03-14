import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
  LOAD_ARTICLES = '[ARTICLES] Load articles',
  ARTICLES_SUCCESS = '[ARTICLES] Load articles success',
  ARTICLES_FAILURE = '[ARTICLES] Load articles failure',
}

export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export class ArticlesFailure implements Action {
  readonly type = ArticlesActionsTypes.ARTICLES_FAILURE;
  constructor(public payload: any) { }
}

export type All =
      LoadArticles
    | ArticlesFailure