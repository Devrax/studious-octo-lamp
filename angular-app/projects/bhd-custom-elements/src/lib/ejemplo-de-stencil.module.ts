import { NgModule } from '@angular/core';
import { DIRECTIVES } from './ejemplo-de-stencil';
import { defineCustomElements } from 'stencil-chapter/loader';

defineCustomElements(window);

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class EjemploDeStencilModule {}
