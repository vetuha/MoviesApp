import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movie.reducer';
import * as fromSearch from './search.reducer';
import * as fromTable from './table.reducer';
import * as fromFilter from './filter.reducer';

export interface State {
  search: fromSearch.State;
  movies: fromMovies.State;
  table: fromTable.State;
  filter: fromFilter.State
}

export const reducers = {
  search: fromSearch.reducer,
  movies: fromMovies.reducer,
  table: fromTable.reducer,
  filter: fromFilter.reducer
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
export const getSideLockState = createSelector(getTableState, fromTable.getSideLockState);

/**
 * Table Reducers
 */
export const getFilterState = (state: State) => state.filter;

export const getCurrentGenre = createSelector(getFilterState, fromFilter.getCurrentGenre);
export const getMaxLength = createSelector(getFilterState, fromFilter.getMaxLength);
export const getMinRating = createSelector(getFilterState, fromFilter.getMinRating);
export const getFiltersState = createSelector(getFilterState, fromFilter.getFiltersState);