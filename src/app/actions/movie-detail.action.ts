import { Action } from '@ngrx/store';
import { Movie } from '../models/movie.model';

export const LOAD = '[Movie] Load';
export const SELECT = '[Movie] Select';


export class LoadAction implements Action {
    readonly type = LOAD;

    constructor(public payload: Movie) { }
}

export class SelectAction implements Action {
    readonly type = SELECT;

    constructor(public payload: number) { }
}

export type Actions = LoadAction
    | SelectAction;