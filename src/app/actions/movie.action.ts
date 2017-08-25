import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const SEARCH = '[Movie] Search';
export const SEARCH_COMPLETE = '[Movie] Search Complete';
export const LOAD = '[Movie] Load';
export const LOAD_SUCCESS = '[Movie] Load success';
export const LOAD_FAILURE = '[Movie] Load failure';

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

export type Actions =
  | SearchAction
  | SearchCompleteAction
  | LoadAction
  | LoadSuccessAction
  | LoadFailedAction;