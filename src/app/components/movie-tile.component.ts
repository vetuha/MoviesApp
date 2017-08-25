import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';


@Component({
    selector: 'movie-tile',
    templateUrl: './movie-tile.component.html',
    styles: []
})
export class MovieTileComponent {
    @Input() movie: Movie;

    private imgPath = '../assets/movie-covers/';

    get id() {
        return this.movie.id;
    }

    get title() {
        return this.movie.name;
    }

    get thumbnail() {
        return this.imgPath + this.movie.img;
    }

    get rate() {
        return this.movie.rate;
    }

    get genres() {
        return this.movie.genres;
    }

    get mLength() {
        return this.movie.length;
    }
}