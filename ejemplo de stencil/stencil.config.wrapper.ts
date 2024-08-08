import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target'; // npm i @stencil/angular-output-target --save-dev
import { reactOutputTarget } from '@stencil/react-output-target'; // npm i @stencil/react-output-target --save-dev


export const config: Config = {
  namespace: 'stencil-bhd',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
        type: 'dist-custom-elements',
        customElementsExportBehavior: 'auto-define-custom-elements',
        externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-bhd',
      directivesProxyFile: '../wrapper angular/projects/ejemplo-wrapper-stencil/src/lib/ejemplo-de-stencil/components.ts',
      directivesArrayFile: '../wrapper angular/projects/ejemplo-wrapper-stencil/src/lib/ejemplo-de-stencil/index.ts',
    }),
    reactOutputTarget({
        componentCorePackage: 'stencil-bhd',
        proxiesFile: '../wrapper react/src/components.ts',
    }),
  ],
};
