import { Action } from '@ngrx/store';

export const CHANGE_RATING = '[Filter] Change rating';
export const CHANGE_MAXLENGTH = '[Filter] Chane max length';
export const CHANGE_GENRE = '[Filter] Change genre';
export const RESET_ALL = '[Filter] Reset all';

export class ChangeRatingAction implements Action {
    readonly type = CHANGE_RATING;

    constructor(public payload: number) { }
}

export class ChangeMaxLengthAction implements Action {
  readonly type = CHANGE_MAXLENGTH;

  constructor(public payload: number) { }
}

export class ChangeGenreAction implements Action {
  readonly type = CHANGE_GENRE;

  constructor(public payload: any) { }
}

export class ResetAllFiltersAction implements Action {
  readonly type = RESET_ALL;
}

export type Actions = ChangeRatingAction 
| ChangeMaxLengthAction
| ChangeGenreAction
| ResetAllFiltersAction;