import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Movie } from '../models/movie.model';

@Injectable()
export class MovieService {

  private moviesUrl = 'api/movies';

  constructor(private http: Http) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get(this.moviesUrl)
      .map(res => res.json().data || []);
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json());
  }

}