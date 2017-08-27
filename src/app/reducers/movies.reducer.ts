import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as movies from '../actions/movies.action';

export interface State {
    loaded: boolean;
    loading: boolean;
    searching: boolean;
    entities: Array<Movie>;
    count: number;
    page: number;
    selectedMovieId: number | null;
};

export const initialState: State = {
    loaded: false,
    loading: false,
    searching: false,
    entities: [],
    count: 0,
    page: 1,
    selectedMovieId: null
};

export function reducer(state = initialState, action: movies.Actions): State {
    switch (action.type) {

        case movies.LOAD: {
            const page = action.payload;

            return Object.assign({}, state, {
                loading: true,
                page: page == null ? state.page : page
            });
        }
        case movies.SEARCH: {

            return Object.assign({}, state, {
                searching: true
            });
        }
        case movies.LOAD_SUCCESS: {
            const movies = action.payload;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: movies,
                count: movies.length
            });
        }
        case movies.LOAD_FAILURE: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: [],
                count: 0
            });
        }
        case movies.SEARCH_COMPLETE: {
            const movies = action.payload;

            return Object.assign({}, state, {
                entities: movies,
                count: movies.length,
                page: 1
            });
        }
        case movies.SELECT: {
            return Object.assign({}, state, {
                selectedMovieId: action.payload
            });
        }
        default:
            return state;
    }
};

export const getEntities = (state: State) => state.entities;
export const getPage = (state: State) => state.page;
export const getCount = (state: State) => state.count;
export const getLoadingState = (state: State) => state.loading;
export const getSelectedId = (state: State) => state.selectedMovieId;