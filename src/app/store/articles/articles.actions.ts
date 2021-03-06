import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
  LOAD_ARTICLES = '[ARTICLES] Load articles',
  LOAD_ARTICLES_TOP = '[ARTICLES] Load articles top',
  REDUCE_ARTICLES_ALL = '[ARTICLES] Reduce articles all',
  REDUCE_ARTICLES_TOP = '[ARTICLES] Reduce articles top',
  LOAD_ARTICLES_SUCCESS = '[ARTICLES] Load articles success',
  LOAD_ARTICLES_FAILURE = '[ARTICLES] Load articles failure',
}

export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export class LoadArticlesTop implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES_TOP;
  constructor() { }
}
export class ReduceArticlesAll implements Action {
  readonly type = ArticlesActionsTypes.REDUCE_ARTICLES_ALL;
  constructor(public payload: any) { }
}
export class ReduceArticlesTop implements Action {
  readonly type = ArticlesActionsTypes.REDUCE_ARTICLES_TOP;
  constructor(public payload: any) { }
}
export class LoadArticlesFailure implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES_FAILURE;
  constructor(public payload: any) { }
}

export type All =
      LoadArticles
    | LoadArticlesTop
    | ReduceArticlesAll
    | ReduceArticlesTop
    | LoadArticlesFailure