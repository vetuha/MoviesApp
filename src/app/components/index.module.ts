import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MovieDetailComponent } from './movie-detail.component';
import { MovieTableListComponent } from './movie-table-list.component';
import { MovieTableTileComponent } from './movie-table-tile.component';
import { MovieTileComponent } from './movie-tile.component';
import { MovieTableComponent } from './movie-table.component';
import { TableTopMenuComponent } from './topmenu.component';
import { NavBarComponent } from './navbar.component';
import { LayoutComponent } from './layout.component';

import { PipesModule } from '../pipes/index.module';


export const COMPONENTS = [
  MovieDetailComponent,
  MovieTableListComponent,
  MovieTableTileComponent,
  MovieTileComponent,
  MovieTableComponent,
  TableTopMenuComponent,
  NavBarComponent,
  LayoutComponent
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