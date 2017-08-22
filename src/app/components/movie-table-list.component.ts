import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-table-list',
    templateUrl: './movie-table-list.component.html',
    styles: []
})
export class MovieTableListComponent {
    @Input() movies: Movie[];
}