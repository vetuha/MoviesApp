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
        .map(toPayload)
        .switchMap((req) => this._service.getMovies(req)
            .map((res) => new LoadSuccessAction(res)))
        .catch(() => of(new LoadFailedAction())
        );

    @Effect()
    search$ = this._actions
        .ofType(movies.SEARCH)
        .map(toPayload)
        .switchMap(req => {
            if (req.query === '') {
                return empty();
            }
            return this._service.searchMovies(req)
                .map((res) => new SearchCompleteAction(res))
        })
        .catch(() => of(new SearchCompleteAction({entities:[], count:0})));
}