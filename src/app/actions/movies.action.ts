import { Action } from '@ngrx/store';
import { SearchResponse } from '../models/response.model';
import { SearchRequest } from '../models/request.model';

export const SEARCH = '[Movies] Search';
export const SEARCH_COMPLETE = '[Movies] Search Complete';
export const LOAD = '[Movies] Load';
export const LOAD_SUCCESS = '[Movies] Load success';
export const LOAD_FAILURE = '[Movies] Load failure';
export const SELECT = '[Movies] Select'

export class SearchAction implements Action {
  readonly type = SEARCH;

  constructor(public payload: SearchRequest) { }
}

export class SearchCompleteAction implements Action {
  readonly type = SEARCH_COMPLETE;

  constructor(public payload: SearchResponse) { }
}

export class LoadAction implements Action {
  readonly type = LOAD;

  constructor(public payload: SearchRequest) { }
}

export class LoadFailedAction implements Action {
  readonly type = LOAD_FAILURE;

  constructor() { }
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: SearchResponse) { }
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