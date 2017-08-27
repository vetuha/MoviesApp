import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import {TableState} from '../actions/table.action';
import * as fromRoot from '../reducers/index';
import * as table from '../actions/table.action';

@Component({
    selector: 'table-top-menu',
    templateUrl: './topmenu.component.html',
    styles: []
})
export class TopMenuComponent {
    tableState = TableState;
    
    @Input() count: number;
    @Input() page: number;
    @Input() loading: boolean;
    @Input() tableView: boolean;

    @Output() onPageChanged = new EventEmitter<number>();
    @Output() onCountPerPageChanged = new EventEmitter<number>();  

    constructor(private store: Store<fromRoot.State>) {

    }

    changeTableView(viewType: TableState) {
        this.store.dispatch(new table.ChangeViewAction(viewType));
    }
}