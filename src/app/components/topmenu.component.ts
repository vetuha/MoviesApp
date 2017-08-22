import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'table-top-menu',
    template: ``,
    styles: []
})
export class TableTopMenuComponent {
    @Input() count: number;
    @Input() page: number;
    @Input() loading: boolean;

    @Output() onPageChanged = new EventEmitter<number>();
    @Output() onCountPerPageChanged = new EventEmitter<number>();
    
}