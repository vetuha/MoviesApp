import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from "@ngrx/effects";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './containers/app';
import { CollectionPageComponent } from './containers/movies-collection-page';
import { MovieService } from './services/movie.service';
import { MovieEffects } from './effects/movie.effects';

import { reducers } from './reducers/index';
import { routes } from './routes';

@NgModule({
  imports: [
    BrowserModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(routes, { useHash: true }),
    StoreModule.forRoot(reducers, {
      //place for future reducers
    }),
    EffectsModule.forFeature([MovieEffects]),
  ],
  declarations: [
    AppComponent,
    CollectionPageComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
