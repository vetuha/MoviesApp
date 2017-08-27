import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromRoot from '../reducers/index';
import * as movies from '../actions/movies.action';
import * as filter from '../actions/filter.action';
import { TableState } from '../actions/table.action';
import { Movie } from '../models/movie.model';
import { SearchRequest } from '../models/request.model';
import { MovieFilters } from '../reducers/filter.reducer';
import { genreType, GenreType } from "../models/genre.model";

@Component({
    selector: 'movie-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './movie-collection-page.html',
    styles: [],
})
export class CollectionPageComponent implements OnInit {
    public tableState = TableState;
    selectedGenre: GenreType = genreType.all;
    searchTerm: String = null;
    currentPage: number = 1;
    subscription: Subscription;
    movies$: Observable<Movie[]>;
    tableView$: Observable<TableState>;
    moviesCount$: Observable<number>;
    moviesPage$: Observable<number>;
    moviesLoading$: Observable<boolean>;
    selectedGenre$: Observable<GenreType>;

    constructor(private store: Store<fromRoot.State>) {
        this.movies$ = store.select(fromRoot.getMoviesEntities);
        this.moviesCount$ = store.select(fromRoot.getMoviesCount);
        this.moviesPage$ = store.select(fromRoot.getMoviesPage);
        this.moviesLoading$ = store.select(fromRoot.getMoviesLoadingState);
        this.tableView$ = store.select(fromRoot.getTableView);
    }

    ngOnInit() {
        this.subscription = this.store.select(fromRoot.getFilterState).subscribe((state) => {
            this.selectedGenre = state.currentGenre;
            this.searchTerm = state.query;
        });
        this.subscription = this.moviesPage$.subscribe((page) => {
            this.currentPage = page;
        });
        this.loadMovies();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    onMoviesPageChanged(page: number) {
        this.loadMovies(page);
    }

    searchMovie(query: string) {
        if (query && query.trim()) {
            let filters: MovieFilters = new MovieFilters();
            filters.query = query;
            this.store.dispatch(new filter.ApplyFiltersAction(filters));
            this.loadMovies();
        }
    }

    applyFilters(){
        this.loadMovies();
    }

    clearSearch() {
        this.resetFilters();
        this.loadMovies();
    }

    private loadMovies(page?: number | null) {
        let req: SearchRequest = new SearchRequest();
        req.genre = this.selectedGenre;
        req.query = this.searchTerm;
        req.page = page != null ? page : this.currentPage;
        this.store.dispatch(req.query ? new movies.SearchAction(req) : new movies.LoadAction(req))
    }

    resetFilters() {
        this.store.dispatch(new filter.ResetAllFiltersAction());
    }
}