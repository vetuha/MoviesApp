import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movie.reducer';
import * as fromSearch from './search.reducer';

export interface State {
  search: fromSearch.State;
  movies: fromMovies.State;
}

export const reducers = {
  search: fromSearch.reducer,
  movies: fromMovies.reducer,
};


export const getMoviesState = createFeatureSelector<State>('movies');