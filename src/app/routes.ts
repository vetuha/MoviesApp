import { Routes } from '@angular/router';
import { CollectionPageComponent } from './containers/movies-collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';
import { MovieDetailPageComponent } from './containers/movie-detail-page';
import { MovieExistsGuard } from './guards/movie-exists.guard';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent,
  },
  {
    path: 'movie/:id',
    canActivate: [ MovieExistsGuard ],
    component: MovieDetailPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];