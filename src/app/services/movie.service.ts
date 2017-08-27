import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from '../models/movie.model';
import { genreType } from "../models/genre.model";
import { SearchResponse } from '../models/response.model';
import { SearchRequest } from '../models/request.model';

@Injectable()
export class MovieService {

  private moviesUrl = 'api/movies';

  constructor(private http: Http) { }

  getMovies(request: SearchRequest): Observable<SearchResponse> {
    return this.http.get(this.moviesUrl)
      .map(res => this.filterMovies(res.json().data || [], request));
  }

  getMovie(id: number): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get(url)
      .map(res => res.json().data);
  }

  searchMovies(request: SearchRequest): Observable<SearchResponse> {
    const url = `${this.moviesUrl}/?name=${request.query}`;
    return this.http.get(url)
      .map(res => this.filterMovies(res.json().data || [], request));
  }

  //this job should be done on the server, but since I dont have it - I simply added this method here
  //to simulate filtering, paging...
  private filterMovies(movies: Movie[], request: SearchRequest): SearchResponse {
    let res: SearchResponse = new SearchResponse();
    //filter first
    if (request.genre != genreType.all) {
      movies = movies.filter(movie => movie.genres.indexOf(request.genre) > -1);
    }
    //set count
    res.count = movies.length;
    //pagination
    let pagination = this.paginate(request.page, movies.length, request.countPerPage);
    movies = movies.slice(pagination.start, pagination.end);
    res.entities = movies;

    return res;
  }

  private paginate(page: number, count:number ,itemsPerPage:number) {
    let beginItem: number;
    let endItem: number;
    if (page == 1) {
      beginItem = 0;      
    } else { 
      beginItem = (page - 1) * itemsPerPage; 
    }
    endItem = beginItem + itemsPerPage;   
    return {
      start: beginItem,
      end: endItem
    };
  }

}