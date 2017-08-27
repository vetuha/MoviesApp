import { NgModule } from '@angular/core';

import { MovieLengthPipe } from './toHHmm.pipe';
import { KeysPipe } from './keys.pipe';

export const PIPES = [
  MovieLengthPipe,
  KeysPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }