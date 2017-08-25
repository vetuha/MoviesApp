import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MovieDetailComponent } from './movie-detail.component';
import { MovieTableListComponent } from './movie-table-list.component';
import { MovieTableTileComponent } from './movie-table-tile.component';
import { MovieTileComponent } from './movie-tile.component';
import { TopMenuComponent } from './topmenu.component';
import { LayoutComponent } from './layout.component';
import { LeftMenuComponent } from './leftmenu.component';

import { PipesModule } from '../pipes/index.module';


export const COMPONENTS = [
  MovieDetailComponent,
  MovieTableListComponent,
  MovieTableTileComponent,
  MovieTileComponent,
  TopMenuComponent,
  LayoutComponent,
  LeftMenuComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }