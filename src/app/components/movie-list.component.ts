import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-list',
    template: `
    <movie-preview *ngFor="let movie of movies" [movie]="movie"></movie-preview>
  `,
    styles: []
})
export class MovieListComponent {
    @Input() movies: Movie[];
}