import { NgModule } from '@angular/core';

import { MovieLengthPipe } from './toHHmm.pipe';


export const PIPES = [
  MovieLengthPipe,
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }