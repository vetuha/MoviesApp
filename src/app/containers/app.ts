import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.html',
    styleUrls: []
})
export class AppComponent implements OnInit {
    constructor(private router: Router) { }

    //this is done to scroll top of the new page when users scroll down and clicks link
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
}