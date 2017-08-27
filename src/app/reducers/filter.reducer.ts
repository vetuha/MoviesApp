import * as filter from '../actions/filter.action';
import { GenreType } from "../models/genre.model";
import { genreType } from "../models/genre.model";

export interface MovieFilters{
    minRate: number;
    selectedGenre: GenreType;    
}

export interface State {
    minRating: number;
    currentGenre: GenreType;
}

const initialState: State = {
    minRating: 5,
    currentGenre: genreType.all
};

export function reducer(state = initialState, action: filter.Actions): State {
    switch (action.type) {
        case filter.APPLY_FILTERS:
            const filters = action.payload;
            return {
                minRating: filters.minRate,
                currentGenre: filters.selectedGenre
            }
        case filter.RESET_RATE_FILTER:
            return Object.assign({}, state, {
                minRating: initialState.minRating
            });
        case filter.RESET_ALL:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export const getMinRating = (state: State) => state.minRating;
export const getCurrentGenre = (state: State) => state.currentGenre;