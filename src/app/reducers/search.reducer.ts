import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as movie from '../actions/movies.action';

export interface State {
    ids: number[];
    query: string;
}

export const initialState: State = {
    ids: [],
    query: ''
};


export function reducer(state = initialState, action: movie.Actions): State {
    switch (action.type) {
        
        default:
            return state;
    }
};