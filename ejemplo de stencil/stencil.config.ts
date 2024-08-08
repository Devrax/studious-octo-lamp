import { Config } from '@stencil/core';

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
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],

  // Sobrevalorado; Por el momento no se cubriran las pruebas unitarias
  testing: {
    browserHeadless: "new",
  },
};
