import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import { SearchResponse } from '../models/response.model';
import { SearchRequest } from '../models/request.model';
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
            const request = action.payload;

            return Object.assign({}, state, {
                loading: true,
                page: request.page == null ? state.page : request.page
            });
        }
        case movies.SEARCH: {
            const request = action.payload;

            return Object.assign({}, state, {
                searching: true,
                loading: true,
                page: request.page == null ? state.page : request.page
            });
        }
        case movies.LOAD_SUCCESS: {
            const result = action.payload;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: result.entities,
                count: result.count
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
            const result = action.payload;

            return Object.assign({}, state, {
                entities: result.entities,
                count: result.count,
                page: 1,
                searching: false,
                loading: false,
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