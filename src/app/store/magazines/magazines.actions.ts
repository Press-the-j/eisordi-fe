import { Action } from '@ngrx/store';

export enum MagazinesActionsTypes {
RESOLVE_MAGAZINES = '[MAGAZINES] Resolve magazines',
MAGAZINES_TOP_LOADED = '[MAGAZINES] Magazines top loaded',
MAGAZINES_LOADED = '[MAGAZINES] Magazines Loaded',
MAGAZINES_FAILURE = '[MAGAZINES] Magazines failure',
LOAD_MAGAZINES_PER_PAGE = '[MAGAZINES] Set magazines per page',
SET_PAGE_FILTER_MAGAZINES = '[MAGAZINES] Set page filter magazines'
}
export class MagazinesLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_LOADED;
  constructor(public payload: any) { }
}
export class MagazinesTopLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_TOP_LOADED;
  constructor(public payload: any) { }
}
export class SetPageFilterMagazines implements Action {
  readonly type = MagazinesActionsTypes.SET_PAGE_FILTER_MAGAZINES;
  constructor(public payload: number) { }
}
export class LoadMagazinesPerPage implements Action {
  readonly type = MagazinesActionsTypes.LOAD_MAGAZINES_PER_PAGE;
  constructor(public payload: number) { }
}
export class ResolveMagazines implements Action {
  readonly type = MagazinesActionsTypes.RESOLVE_MAGAZINES;
  constructor() { }
}
export class MagazinesFailure implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_FAILURE;
  constructor(public payload: any) { }
}
export type All =
      ResolveMagazines
    | MagazinesLoaded
    | LoadMagazinesPerPage
    | SetPageFilterMagazines
    | MagazinesTopLoaded
    | MagazinesFailure;  
    