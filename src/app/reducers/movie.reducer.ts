import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as movie from '../actions/movie.action';

export interface State {
    ids: number[];
    entities: { [id: number]: Movie };
    selectedMovieId: number | null;
}

export const initialState: State = {
    ids: [],
    entities: {},
    selectedMovieId: null,
};

export function reducer(state = initialState, action: movie.Actions): State {
    switch (action.type) {
        
        case movie.SELECT:
            return {
                ids: state.ids,
                entities: state.entities,
                selectedMovieId: action.payload
            };
        default:
            return state;
    }
};