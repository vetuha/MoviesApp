import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '../reducers/index';
import * as filter from '../actions/filter.action';
import { MovieFilters } from '../reducers/filter.reducer';
import { genreType, GenreType } from "../models/genre.model";

@Component({
    selector: 'left-menu',
    templateUrl: './leftmenu.component.html',
    styles: []
})
export class LeftMenuComponent {
    query = '';
    rate:number = 5;  
    selectedGenre$: Observable<GenreType>
    allGenres = genreType;

    @Input() searching = false;

    @Output() search = new EventEmitter<string>();

    constructor(private store: Store<fromRoot.State>) {
        this.selectedGenre$ = this.store.select(fromRoot.getCurrentGenre);
    }
    
    filterGenre(genre: any) {
        let newFilter:MovieFilters = {
            minRate: 5,
            selectedGenre: genre.value
        }
        this.store.dispatch(new filter.ApplyFiltersAction(newFilter));
    }
}