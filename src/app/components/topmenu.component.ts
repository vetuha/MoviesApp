import { Component, Input, EventEmitter, Output } from '@angular/core';
import {TableState} from '../actions/table.action';

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
    @Output() onViewChanged = new EventEmitter<TableState>();    
}