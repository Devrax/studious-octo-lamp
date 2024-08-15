import { APP_INITIALIZER, NgModule } from '@angular/core';
import { DIRECTIVES } from './ejemplo-de-stencil';
import { defineCustomElements } from 'stencil-bhd/loader';

@NgModule({
  declarations: [...DIRECTIVES],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => defineCustomElements,
      multi: true
    }
  ],
  exports: [...DIRECTIVES]
})
export class BhdBiometricToolkitModule {}
