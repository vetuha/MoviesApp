import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieDetailComponent } from './movie-detail.component';
import { MovieListComponent } from './movie-list.component';
import { MoviePreviewComponent } from './movie-preview.component';

import { PipesModule } from '../pipes/index.module';


export const COMPONENTS = [
  MovieDetailComponent,
  MovieListComponent,
  MoviePreviewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }