import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as movie from '../actions/movie.action';

export interface State {
    loaded: boolean;
    loading: boolean;
    entities: Array<Movie>;
    count: number;
    page: number;
};

export const initialState: State = {
    loaded: false,
    loading: false,
    entities: [],
    count: 0,
    page: 1
};

export function reducer(state = initialState, action: movie.Actions): State {
    switch (action.type) {

        case movie.LOAD: {
            const page = action.payload;

            return Object.assign({}, state, {
                loading: true,
                page: page == null ? state.page : page
            });
        }
        case movie.LOAD_SUCCESS: {
            const movies = action.payload;

            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: movies,
                count: movies.length
            });
        }

        case movie.LOAD_FAILURE: {
            return Object.assign({}, state, {
                loaded: true,
                loading: false,
                entities: [],
                count: 0
            });
        }
        default:
            return state;
    }
};

export const getEntities = (state:State) =>  state.entities;
export const getPage = (state:State) => state.page;
export const getCount = (state:State) => state.count;
export const getLoadingState = (state:State) => state.loading;