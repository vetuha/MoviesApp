import { Component, Input } from '@angular/core';
import { Movie } from '../models/movie.model';


@Component({
    selector: 'movie-detail',
    template: ``,
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

    get description() {
        return this.movie.description;
    }

    get thumbnail() {
        return this.movie.img;
    }

    get rate() {
        return this.movie.rate;
    }

    get movieLength() {
        return this.movie.length;
    }

    get genres() {
        return this.movie.genres;
    }
}