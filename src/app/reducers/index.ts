import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromMovies from './movie.reducer';
import * as fromSearch from './search.reducer';
import * as fromTable from './table.reducer';

export interface State {
  search: fromSearch.State;
  movies: fromMovies.State;
  table: fromTable.State;
}

export const reducers = {
  search: fromSearch.reducer,
  movies: fromMovies.reducer,
  table: fromTable.reducer
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