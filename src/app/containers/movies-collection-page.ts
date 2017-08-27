import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers/index';
import * as movies from '../actions/movies.action';
import * as filter from '../actions/filter.action';
import * as table from '../actions/table.action';
import {TableState} from '../actions/table.action';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './movie-collection-page.html',
    styles: [],
})
export class CollectionPageComponent implements OnInit {
    public tableState = TableState;
    movies$: Observable<Movie[]>;
    tableView$: Observable<TableState>;
    moviesCount$: Observable<number>;
    moviesPage$: Observable<number>;
    moviesLoading$: Observable<boolean>;

    constructor(private store: Store<fromRoot.State>) {
        this.movies$ = store.select(fromRoot.getMoviesEntities);
        this.moviesCount$ = store.select(fromRoot.getMoviesCount);
        this.moviesPage$ = store.select(fromRoot.getMoviesPage);
        this.moviesLoading$ = store.select(fromRoot.getMoviesLoadingState);
        this.tableView$ = store.select(fromRoot.getTableView)
    }

    ngOnInit() {
        this.store.dispatch(new movies.LoadAction(1));
    }

    onMoviesPageChanged(page: number) {
        this.store.dispatch(new movies.LoadAction(page))
    }

    searchMovie(query: string) {
        this.resetFilters();
        this.store.dispatch(new movies.SearchAction(query));
    }

    changeTableView(viewType: TableState) {
        this.store.dispatch(new table.ChangeViewAction(viewType));
    }

    // applyFilters(viewType: TableState) {
    //     this.store.dispatch(new filter.(viewType));
    // }

    resetFilters() {
        this.store.dispatch(new filter.ResetAllFiltersAction());
    }
}