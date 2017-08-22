import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers/index';
import * as movies from '../actions/movie.action';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-collection-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './movie-collection-page.html',
    styles: [],
})
export class CollectionPageComponent implements OnInit {
    movies$: Observable<Movie[]>;

    constructor(private store: Store<fromRoot.State>) {
        this.movies$ = store.select(fromRoot.getMoviesEntities);
    }

    ngOnInit() {
        this.store.dispatch(new movies.LoadAction(1));
    }
}