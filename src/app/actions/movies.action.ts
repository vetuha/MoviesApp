import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const SEARCH = '[Movies] Search';
export const SEARCH_COMPLETE = '[Movies] Search Complete';
export const LOAD = '[Movies] Load';
export const LOAD_SUCCESS = '[Movies] Load success';
export const LOAD_FAILURE = '[Movies] Load failure';
export const SELECT = '[Movies] Select'

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Movie[]) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload:any) { }
}

export class LoadFailedAction implements Action {
  readonly type = LOAD_FAILURE;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload:any) { }
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: number) { }
}

export type Actions =
  | SearchAction
  | SearchCompleteAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailedAction
  | SelectAction;