import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import { of } from 'rxjs/observable/of';
import { empty } from 'rxjs/observable/empty';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import * as movies from "../actions/movies.action";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { MovieService } from "../services/movie.service";
import { LoadFailedAction } from "../actions/movies.action";
import { LoadSuccessAction } from "../actions/movies.action";
import { SearchCompleteAction } from "../actions/movies.action";

@Injectable()
export class MovieEffects {
    constructor(
        private _actions: Actions,
        private _service: MovieService
    ) { }

    @Effect()
    loadMovies$ = this._actions.ofType(movies.LOAD)
        .switchMap(() => this._service.getMovies()
            .map((movies) => new LoadSuccessAction(movies)))
        .catch(() => of(new LoadFailedAction())
        );

    @Effect()
    search$ = this._actions
        .ofType(movies.SEARCH)
        .map(toPayload)
        .switchMap(query => {
            if (query === '') {
                return empty();
            }
            return this._service.searchMovies(query)
                .map((movies) => new SearchCompleteAction(movies))
        })
        .catch(() => of(new SearchCompleteAction([])));
}