import { Directive, ElementRef, Renderer, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromRoot from "../reducers";
let $ = require('jquery');

@Directive({ selector: '[sidebarWatch]' })

export class NavbarWatchDirective implements OnInit {
    constructor(private el: ElementRef, private _store: Store<fromRoot.State>) { }

    ngOnInit() {
        /*
         Watch for the sidebar state
         */
        this._store.select(fromRoot.getTableState).subscribe((state) => {
            if (state) {
                
            } else {
                
            }
        });
    }

}