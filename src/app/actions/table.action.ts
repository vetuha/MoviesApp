import { Action } from '@ngrx/store';

export enum TableState {
    List = 1,
    Thumbnail
}

export const CHANGE_VIEW = '[Table] Change View';

export class ChangeViewAction implements Action {
    readonly type = CHANGE_VIEW;

    constructor(public payload: TableState) { }
}

export type Actions = ChangeViewAction;