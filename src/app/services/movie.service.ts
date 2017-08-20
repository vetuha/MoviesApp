import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

  private moviesUrl = 'api/movies';

  constructor(private http: Http) { }

  getMovies(): Promise<Movie[]> {
    return this.http.get(this.moviesUrl)
      .toPromise()
      .then(response => response.json().data as Movie[])
      .catch(this.handleError);
  }

  getMovie(id: number): Promise<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Movie)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}