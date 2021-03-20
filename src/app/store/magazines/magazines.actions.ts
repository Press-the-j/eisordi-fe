import { Action } from '@ngrx/store';

export enum MagazinesActionsTypes {
LOAD_MAGAZINES = '[MAGAZINES] Load magazines',
MAGAZINES_TOP_LOADED = '[MAGAZINES] Magazines top loaded',
MAGAZINES_LOADED = '[MAGAZINES] Magazines Loaded',
MAGAZINES_FAILURE = '[MAGAZINES] Magazines failure',
SET_MAGAZINES_PER_PAGE = '[MAGAZINES] Set magazines per page'
}
export class MagazinesLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_LOADED;
  constructor(public payload: any) { }
}
export class MagazinesTopLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_TOP_LOADED;
  constructor(public payload: any) { }
}
export class SetMagazinesPerPage implements Action {
  readonly type = MagazinesActionsTypes.SET_MAGAZINES_PER_PAGE;
  constructor(public payload: number) { }
}
export class LoadMagazines implements Action {
  readonly type = MagazinesActionsTypes.LOAD_MAGAZINES;
  constructor() { }
}
export class MagazinesFailure implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_FAILURE;
  constructor(public payload: any) { }
}
export type All =
      LoadMagazines
    | MagazinesLoaded
    | SetMagazinesPerPage
    | MagazinesTopLoaded
    | MagazinesFailure;  
    