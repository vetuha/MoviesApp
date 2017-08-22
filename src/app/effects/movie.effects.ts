import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import * as movies from "../actions/movie.action";
import { Actions, Effect } from "@ngrx/effects";
import { MovieService } from "../services/movie.service";
import { LoadFailedAction } from "../actions/movie.action";
import { LoadSuccessAction } from "../actions/movie.action";

@Injectable()
export class MovieEffects {
    constructor(
        private _actions: Actions,
        private _service: MovieService
    ) { }

    @Effect() loadMovies$ = this._actions.ofType(movies.LOAD)
        .switchMap(() => this._service.getMovies()
            .map((movies) => new LoadSuccessAction(movies)))
        .catch(() => of(new LoadFailedAction())
        );
}