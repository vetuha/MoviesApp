import { createSelector } from '@ngrx/store';
import { Movie } from '../models/movie.model';
import * as movie from '../actions/movie-detail.action';


export interface State {
    ids: number[];
    entities: { [id: number]: Movie };
    selectedMovieId: number | null;
};

export const initialState: State = {
    ids: [],
    entities: {},
    selectedMovieId: null,
};

export function reducer(state = initialState, action: movie.Actions): State {
    switch (action.type) {
        case movie.LOAD: {
            const movie = <Movie>action.payload;

            if (state.ids.indexOf(movie.id) > -1) {
                return state;
            }

            return {
                ids: [...state.ids, movie.id],
                entities: Object.assign({}, state.entities, {
                    [movie.id]: movie
                }),
                selectedMovieId: state.selectedMovieId
            };
        }

        case movie.SELECT: {
            return {
                ids: state.ids,
                entities: state.entities,
                selectedMovieId: <number>action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getSelectedId = (state: State) => state.selectedMovieId;
export const getSelected = createSelector(getEntities, getSelectedId, (entities, selectedId) => {
    return entities[selectedId];
});