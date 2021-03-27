import { Action } from '@ngrx/store';

export enum MagazinesActionsTypes {
RESOLVE_MAGAZINES = '[MAGAZINES] Resolve magazines',
MAGAZINES_TOP_LOADED = '[MAGAZINES] Magazines top loaded',
MAGAZINES_LOADED = '[MAGAZINES] Magazines Loaded',
MAGAZINES_FAILURE = '[MAGAZINES] Magazines failure',
LOAD_MAGAZINES_PER_PAGE = '[MAGAZINES] Load magazines per page',
CHANGE_MAGAZINES_PAGER_FILTER = '[MAGAZINES] Change magazines page filter',
MAGAZINES_PAGER_FILTER_CHANGED = '[MAGAZINES] Magazines page filter changed',
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
export class ChangeMagazinesPagerFilter implements Action {
  readonly type = MagazinesActionsTypes.CHANGE_MAGAZINES_PAGER_FILTER;
  constructor(public payload: number) { }
}
export class MagazinesPagerFilterChanged implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_PAGER_FILTER_CHANGED;
  constructor(public payload: any) { }
}
export class LoadMagazinesPerPage implements Action {
  readonly type = MagazinesActionsTypes.LOAD_MAGAZINES_PER_PAGE;
  constructor(public payload: any) { }
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
    | ChangeMagazinesPagerFilter
    | MagazinesPagerFilterChanged
    | MagazinesTopLoaded
    | MagazinesFailure;  
    