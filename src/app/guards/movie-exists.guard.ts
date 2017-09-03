import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MovieService } from '../services/movie.service';
import * as fromRoot from '../reducers/index';
import * as details from '../actions/movie-detail.action';


@Injectable()
export class MovieExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromRoot.State>,
    private _service: MovieService,
    private router: Router
  ) { }

  
  hasMovieInStore(id: number): Observable<boolean> {
    return this.store.select(fromRoot.getMovieDetailsEntities)
      .map(entities => !!entities[id])
      .take(1)
  }

  hasMovieInApi(id: number): Observable<boolean> {
    return this._service.getMovie(id)
      .map(movieDetails => new details.LoadAction(movieDetails))
      .do((action: details.LoadAction) => this.store.dispatch(action))
      .map(movie => !!movie)
      .catch(() => this.navigateToError());
  }

  hasMovie(id: number): Observable<boolean> {
    return this.hasMovieInStore(id)
      .switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasMovieInApi(id);
      });
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    let id = route.params['id'];
    return /^\d+$/.test(id) ? this.hasMovie(id) : this.navigateToError();
  }

  private navigateToError():Observable<boolean>{
    this.router.navigate(['/404']);
    return of(false);
  }
}