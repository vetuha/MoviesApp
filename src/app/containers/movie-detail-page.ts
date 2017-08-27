import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import * as fromRoot from '../reducers/index';
import * as movie from '../actions/movie-detail.action';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-detail-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './movie-detail-page.html',
    styles: [],
})
export class MovieDetailPageComponent implements OnDestroy {
    movie$: Observable<Movie>;
    actionsSubscription: Subscription;

    constructor(private store: Store<fromRoot.State>, route: ActivatedRoute) {
        this.actionsSubscription = route.params
            .map(params => new movie.SelectAction(params.id))
            .subscribe(store);
        this.movie$ = store.select(fromRoot.getSelectedMovie);
    }

    ngOnDestroy() {
        this.actionsSubscription.unsubscribe();
    }
}