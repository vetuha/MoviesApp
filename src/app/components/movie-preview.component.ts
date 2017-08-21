import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';


@Component({
    selector: 'movie-preview',
    template: `
  <a [routerLink]="['/movie', id]">
   <div>
   <div class="rate">
        <span>Rate: </span>
        <span>{{ rate }}</span>
   </div>
   <div class="image">
        <img *ngIf="thumbnail" [src]="thumbnail"/>
   </div>
   <div class="title">
        <span>Title: </span>
        <span>{{ title }}</span>
   </div>
   <div class="title">
        <span>Genres: </span>
        <span>{{ genres }}</span>
   </div>
   </div>
   </a>
   `,
    styles: []
})
export class MoviePreviewComponent {
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