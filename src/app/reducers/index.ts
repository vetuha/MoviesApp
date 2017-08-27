import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movies.reducer';
import * as fromSearch from './search.reducer';
import * as fromTable from './table.reducer';
import * as fromFilter from './filter.reducer';
import * as fromDetails from './movie-detail.reducer';

export interface State {
  search: fromSearch.State;
  movies: fromMovies.State;
  table: fromTable.State;
  filter: fromFilter.State;
  details: fromDetails.State
}

export const reducers = {
  search: fromSearch.reducer,
  movies: fromMovies.reducer,
  table: fromTable.reducer,
  filter: fromFilter.reducer,
  details: fromDetails.reducer
};


export const getMoviesState = (state: State) => state.movies;

export const getMoviesEntities = createSelector(getMoviesState, fromMovies.getEntities);
export const getMoviesCount = createSelector(getMoviesState, fromMovies.getCount);
export const getMoviesPage = createSelector(getMoviesState, fromMovies.getPage);
export const getMoviesLoadingState = createSelector(getMoviesState, fromMovies.getLoadingState);

/**
 * Table Reducers
 */
export const getTableState = (state: State) => state.table;

export const getTableView = createSelector(getTableState, fromTable.getTableView);

/**
 * Filter Reducers
 */
export const getFilterState = (state: State) => state.filter;

export const getCurrentGenre = createSelector(getFilterState, fromFilter.getCurrentGenre);
export const getMinRating = createSelector(getFilterState, fromFilter.getMinRating);
export const getSearchTerm = createSelector(getFilterState, fromFilter.getSearchTerm);

/**
 * Movie details Reducers
 */
export const getMovieDetailsState = (state: State) => state.details;

export const getMovieDetailsEntities = createSelector(getMovieDetailsState, fromDetails.getEntities);
export const getMovieDetailsIds = createSelector(getMovieDetailsState, fromDetails.getIds);
export const getSelectedMovieId = createSelector(getMovieDetailsState, fromDetails.getSelectedId);
export const getSelectedMovie = createSelector(getMovieDetailsState, fromDetails.getSelected);