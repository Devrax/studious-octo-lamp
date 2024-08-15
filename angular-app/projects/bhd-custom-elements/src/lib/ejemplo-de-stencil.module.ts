import { NgModule } from '@angular/core';
import { DIRECTIVES } from './ejemplo-de-stencil';
import { defineCustomElements } from 'stencil-bhd/loader';

defineCustomElements(window);

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES]
})
export class BhdBiometricToolkitModule {}
