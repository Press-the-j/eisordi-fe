import { Action } from '@ngrx/store';

export enum Bonus110ActionTypes {
  SET_SCREEN = '[BONUS110] Set Screen', 
}

export class SetScreen implements Action {
  readonly type = Bonus110ActionTypes.SET_SCREEN;
  constructor(public payload: any) { }
}