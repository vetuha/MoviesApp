import { Action } from '@ngrx/store';

export const APPLY_FILTERS = '[Filter] Apply filters';
export const RESET_RATE_FILTER = '[Filter] Reset rate filter';
export const RESET_ALL = '[Filter] Reset all';
export const CHANGE_QUERY = '[Filter] Change query';

export class ApplyFiltersAction implements Action {
  readonly type = APPLY_FILTERS;

  constructor(public payload: any) { }
}

export class ResetRateFilterAction implements Action {
  readonly type = RESET_RATE_FILTER;
}


export class ResetAllFiltersAction implements Action {
  readonly type = RESET_ALL;
}

export class ChangeQueryAction implements Action {
  readonly type = CHANGE_QUERY;

  constructor(public payload: string) { }
}

export type Actions = ApplyFiltersAction
  | ChangeQueryAction
  | ResetRateFilterAction
  | ResetAllFiltersAction;