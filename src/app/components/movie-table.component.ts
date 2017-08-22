import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
    selector: 'movie-table',
    templateUrl: './movie-table.component.html',
    styles: []
})
export class MovieTableTileComponent {
    @Input() movies: Movie[];
    
}