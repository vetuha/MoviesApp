import { Action } from '@ngrx/store';

export enum TableState {
    List = 1,
    Thumbnail
}

export const CHANGE_VIEW = '[Table] Change View';
export const TOOGLE_SIDELOCK = '[Table] Toogle sidelock';

export class ChangeViewAction implements Action {
    readonly type = CHANGE_VIEW;

    constructor(public payload: TableState) { }
}

export class ToogleSidelockAction implements Action {
  readonly type = TOOGLE_SIDELOCK;
}

export type Actions = ChangeViewAction | ToogleSidelockAction;