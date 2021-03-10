import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
LOAD_ARTICLES = '[ARTICLES] Load articles',
}
export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export type All =
      LoadArticles
    | LoadArticlesTop
    | ReduceArticlesAll
    | ReduceArticlesTop
    | LoadArticlesFailure