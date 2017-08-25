import { Component, Input, Output, EventEmitter  } from '@angular/core';


@Component({
    selector: 'left-menu',
    templateUrl: './leftmenu.component.html',
    styles: []
})
export class LeftMenuComponent {
    query = '';
    rate:number = 5;

    @Input() searching = false;

    @Output() search = new EventEmitter<string>();
    @Output() applyFilters = new EventEmitter<string>();
    @Output() resetFilters = new EventEmitter<string>();
    
}