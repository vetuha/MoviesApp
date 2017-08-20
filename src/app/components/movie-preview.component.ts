import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';


@Component({
  selector: 'movie-preview',
  template: `  `,
  styles: []
})
export class MovieDetailComponent {
  @Input() movie: Movie;

  get id() {
    return this.movie.id;
  }

  get title() {
    return this.movie.name;
  }  

  get thumbnail() {
    return this.movie.img;
  }

  get rate() {
    return this.movie.rate;
  }

  get genres() {
    return this.movie.genres;
  }
}