import * as filter from '../actions/filter.action';
import { GenreType } from "../models/genre.model";

export interface State {
    minRating: number;
    maxLength: number;
    currentGenre: GenreType;
    filtered: boolean;
}

const initialState: State = {
    minRating: 5,
    maxLength: 60,
    currentGenre: null,
    filtered: false
};

export function reducer(state = initialState, action: filter.Actions): State {
    switch (action.type) {
        case filter.CHANGE_RATING:
            const rating = action.payload;
            return Object.assign({}, state, {
                minRating: rating
            });
        case filter.CHANGE_MAXLENGTH:
            const maxLen = action.payload;
            return Object.assign({}, state, {
                maxLength: maxLen
            });
        case filter.CHANGE_GENRE:
            const genre = <GenreType>action.payload;
            return Object.assign({}, state, {
                currentGenre: genre
            });
        case filter.RESET_ALL:
            return Object.assign({}, initialState);
        default:
            return state;
    }
}

export const getMinRating = (state: State) => state.minRating;
export const getMaxLength = (state: State) => state.maxLength;
export const getCurrentGenre = (state: State) => state.currentGenre;
export const getFiltersState = (state: State) => state.filtered;