import { Action } from '@ngrx/store';

export enum MagazinesActionsTypes {
MAGAZINES_LOADED = '[MAGAZINES] Magazines Loaded',
MAGAZINES_FAILURE = '[MAGAZINES] Magazines failure',
}
export class MagazinesLoaded implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_LOADED;
  constructor(public payload: any) { }
}
export class MagazinesFailure implements Action {
  readonly type = MagazinesActionsTypes.MAGAZINES_FAILURE;
  constructor(public payload: any) { }
}
export type All =
      MagazinesLoaded
    | MagazinesFailure;  
    