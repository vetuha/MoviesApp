import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { reducers } from './reducers';

@NgModule({
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot(reducers, {
      //place for future reducers
    })
  ],
  declarations: [AppComponent],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
