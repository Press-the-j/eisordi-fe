import { Action } from '@ngrx/store';

export enum MagazinesActionsTypes {
LOAD_MAGAZINES = '[MAGAZINES] Load magazines',
MAGAZINES_LOADED = '[MAGAZINES] Magazines Loaded',
MAGAZINES_FAILURE = '[MAGAZINES] Magazines failure',
}
export class MagazinesLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_LOADED;
  constructor(public payload: any) { }
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
    | MagazinesFailure;  
    