import * as filter from '../actions/filter.action';
import { GenreType, genreType } from "../models/genre.model";

export class MovieFilters {
    minRate: number;
    selectedGenre: GenreType;
    query:string;

    constructor(){
        this.minRate = 5;
        this.selectedGenre = genreType.all;
        this.query = "";
    }
}

export interface State {
    query: string | null;
    minRating: number;
    currentGenre: GenreType;
}

const initialState: State = {
    query: "",
    minRating: 5,
    currentGenre: genreType.all
};

export function reducer(state = initialState, action: filter.Actions): State {
    switch (action.type) {
        case filter.APPLY_FILTERS:
            const filters = action.payload;
            return {
                query:filters.query,
                minRating: filters.minRate,
                currentGenre: filters.selectedGenre
            }
        case filter.CHANGE_QUERY:
            const query = action.payload;
            return Object.assign({}, state, {
                query: query,
            });
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
export const getSearchTerm = (state: State) => state.query;