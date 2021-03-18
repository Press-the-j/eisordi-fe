import { Action } from '@ngrx/store';

export enum ArticlesActionsTypes {
  LOAD_ARTICLES = '[ARTICLES] Load articles',
  ARTICLES_SUCCESS = '[ARTICLES] Load articles success',
  IS_LOAD_MAGAZINES = '[ARTICLES] Is Magazines load',
  IS_LOAD_PODCASTS = '[ARTICLES] Is Podcasts load',
  IS_LOAD_STORIES = '[ARTICLES] Is Stories load',
  IS_LOAD_POETRIES = '[ARTICLES] Is Poetries load',
  ARTICLES_FAILURE = '[ARTICLES] Load articles load',
}

export class LoadArticles implements Action {
  readonly type = ArticlesActionsTypes.LOAD_ARTICLES;
  constructor() { }
}
export class isLoadMagazines implements Action {
  readonly type = ArticlesActionsTypes.IS_LOAD_MAGAZINES;
  constructor() { }
}
export class isLoadPodcasts implements Action {
  readonly type = ArticlesActionsTypes.IS_LOAD_PODCASTS;
  constructor() { }
}
export class isLoadStories implements Action {
  readonly type = ArticlesActionsTypes.IS_LOAD_STORIES;
  constructor() { }
}
export class isLoadPoetries implements Action {
  readonly type = ArticlesActionsTypes.IS_LOAD_POETRIES;
  constructor() { }
}
export class ArticlesFailure implements Action {
  readonly type = ArticlesActionsTypes.ARTICLES_FAILURE;
  constructor(public payload: any) { }
}

export type All =
      LoadArticles
    | isLoadMagazines
    | isLoadPodcasts
    | isLoadStories
    | isLoadPoetries
    | ArticlesFailure