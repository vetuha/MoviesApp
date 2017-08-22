import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const SEARCH =           '[Movie] Search';
export const SEARCH_COMPLETE =  '[Movie] Search Complete';
export const LOAD =             '[Movie] Load';
export const SELECT =           '[Movie] Select';

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: string) {}
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: Movie[]) {}
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: Movie) {}
}

export class SelectAction implements Action {
  readonly type = SELECT;

  constructor(public payload: number) {}
}

export type Actions =
  | SearchAction
  | SearchCompleteAction
  | LoadAction
  | SelectAction;