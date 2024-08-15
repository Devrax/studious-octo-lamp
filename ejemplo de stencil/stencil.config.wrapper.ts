import { Config } from '@stencil/core';
import { angularOutputTarget } from '@stencil/angular-output-target'; // npm i @stencil/angular-output-target --save-dev
import { reactOutputTarget } from '@stencil/react-output-target'; // npm i @stencil/react-output-target --save-dev


export const config: Config = {
  namespace: 'stencil-chapter',
  outputTargets: [
    // Ideal para empaquetar todos los componentes en una sola biblioteca que se utiliza en conjunto.
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    // Ideal cuando se necesita exportar y utilizar los componentes de forma individual como Custom Elements nativos en diferentes proyectos.
    {
        type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    angularOutputTarget({
      componentCorePackage: 'stencil-chapter',
      outputType: 'component',
      directivesProxyFile: '../angular-app/projects/bhd-custom-elements/src/lib/ejemplo-de-stencil/components.ts',
      directivesArrayFile: '../angular-app/projects/bhd-custom-elements/src/lib/ejemplo-de-stencil/index.ts',
    }),
    reactOutputTarget({
        componentCorePackage: 'stencil-chapter',
        proxiesFile: '../wrapper react/src/components.ts'
    }),
  ],
};
