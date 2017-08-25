import { Routes } from '@angular/router';
import { CollectionPageComponent } from './containers/movies-collection-page';
import { NotFoundPageComponent } from './containers/not-found-page';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];