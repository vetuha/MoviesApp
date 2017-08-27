import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';


@Component({
    selector: 'movie-detail',
    templateUrl: './movie-detail.component.html',
    styles: []
})
export class MovieDetailComponent {
    @Input() movie: Movie;

    private imgPath = '../assets/movie-covers/';

    get id() {
        return this.movie.id;
    }

    get title() {
        return this.movie.name;
    }

    get description() {
        return this.movie.description;
    }

    get thumbnail() {
        return this.imgPath + this.movie.img;
    }

    get rate() {
        return this.movie.rate;
    }

    get length() {
        return this.movie.length;
    }

    get genres() {
        return this.movie.genres;
    }
}