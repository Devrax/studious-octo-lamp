```typescript
type config = {
    /**
     * De forma predeterminada, Stencil intentará optimizar scripts pequeños insertándolos en el HTML. Configurar
     * esta opción a `false` evitará esta optimización y mantendrá todos los scripts separados del HTML.
     */
   allowInlineScripts: boolean;
   /**
    * Al configurar `autoprefixCss` a `true`, Stencil utilizará la configuración apropiada para prefijar automáticamente
    * el CSS. Por ejemplo, los desarrolladores pueden escribir propiedades CSS modernas y estándar, como
    * "transform", y Stencil añadirá automáticamente la versión prefijada, como "-webkit-transform".
    * A partir de Stencil v2, prefijar automáticamente el CSS ya no es la configuración predeterminada.
    * El valor predeterminado es `false`.
    */
   autoprefixCss: boolean | any;
   /**
    * De forma predeterminada, Stencil analizará estáticamente la aplicación y generará un gráfico de componentes
    * que muestra cómo todos los componentes están interconectados.
    *
    * A partir del gráfico de componentes, puede decidir la mejor manera de agrupar los componentes
    * según su uso dentro de la aplicación.
    * Al hacer esto, puede agrupar componentes para reducir las solicitudes de red.
    * Sin embargo, los paquetes pueden generarse manualmente utilizando la configuración de paquetes.
    *
    * La configuración de paquetes es una matriz de objetos que representan cómo se agrupan los componentes
    * en paquetes de carga diferida.
    * Esta configuración rara vez es necesaria ya que Stencil maneja esto automáticamente detrás de escena.
    */
   bundles?: ConfigBundle[];
   /**
    * Stencil almacenará en caché los resultados de la compilación para acelerar las reconstrucciones.
    * Para desactivar esta función, configura enableCache a false.
    */
   enableCache?: boolean;
   /**
    * El directorio donde se crearán subdirectorios para almacenamiento en caché cuando `enableCache` esté configurado
    * en `true` o si se utiliza el Conector de Captura de Pantalla de Stencil.
    *
    * @default '.stencil'
    *
    * @example
    *
    * Una configuración de Stencil como la siguiente:
    * ```ts
    * export const config = {
    *  ...,
    *  enableCache: true,
    *  cacheDir: '.cache',
    *  testing: {
    *    screenshotConnector: 'connector.js'
    *  }
    * }
    * ```
    *
    * Resultará en la siguiente estructura de archivos:
    * ```tree
    * stencil-project-root
    * └── .cache
    *     ├── .build <-- Donde se escribe la caché de archivos relacionados con la compilación
    *     |
    *     └── screenshot-cache.json <-- Donde se escribe la caché de capturas de pantalla
    * ```
    */
   cacheDir?: string;
   /**
    * Tradicionalmente, Stencil se usa para compilar muchos componentes en una aplicación,
    * y cada componente viene con sus propios estilos compartimentados.
    * Sin embargo, aún es común tener estilos que deben ser "globales" en todos los componentes y el sitio web.
    * Un archivo CSS global suele ser útil para configurar Variables CSS.
    *
    * Además, la configuración globalStyle puede usarse para precompilar estilos con Sass, PostCSS, etc.
    * A continuación se muestra una estructura de carpetas de ejemplo que contiene un archivo sass global de una aplicación web, llamado app.css.
    */
   globalStyle?: string;
   /**
    * Generará puntos de entrada {@link https://nodejs.org/api/packages.html#packages_exports export map}
    * para cada componente en la compilación cuando `true`.
    *
    * @default false
    */
   generateExportMaps?: boolean;
   /**
    * Cuando la configuración hashFileNames está configurada en true, y es una compilación de producción,
    * la configuración hashedFileNameLength se usa para determinar cuántos caracteres debe tener el hash del nombre del archivo.
    */
   hashedFileNameLength?: number;
   /**
    * Durante las compilaciones de producción, el contenido de cada archivo generado se hash para representar el contenido,
    * y el valor hash se usa como el nombre del archivo. Si el contenido no se actualiza entre compilaciones,
    * entonces recibe el mismo nombre de archivo. Cuando el contenido se actualiza, el nombre del archivo es diferente.
    *
    * Al hacer esto, las aplicaciones desplegadas pueden "cachear para siempre" el directorio de compilación y aprovechar al máximo
    * las redes de entrega de contenido (CDNs) y caché de archivos intensiva para aplicaciones más rápidas.
    */
   hashFileNames?: boolean;
   /**
    * La configuración namespace es una cadena que representa un espacio de nombres para la aplicación.
    * Para aplicaciones que no están destinadas a ser una biblioteca de componentes reutilizables,
    * el valor predeterminado de App es suficiente. Sin embargo, si la aplicación está destinada a ser consumida
    * como una biblioteca de terceros, como Ionic, se requiere un espacio de nombres único.
    */
   namespace?: string;
   /**
    * Stencil puede tomar el código fuente de una aplicación y compilarlo a numerosos destinos,
    * como una aplicación para ser desplegada en un servidor http, o como una biblioteca de terceros
    * para ser distribuida en npm. De forma predeterminada, las aplicaciones Stencil tienen un tipo de destino de salida de www.
    *
    * La configuración outputTargets es una matriz de objetos, con tipos de www y dist.
    */
   outputTargets?: OutputTarget[];
   /**
    * La configuración plugins puede usarse para agregar tus propios plugins de rollup.
    * De forma predeterminada, Stencil no incluye soporte para Sass o PostCSS.
    * Sin embargo, ambos pueden añadirse utilizando la matriz de plugins.
    */
   plugins?: any[];
   /**
    * Genera archivos source map js para todos los paquetes.
    */
   sourceMap?: boolean;
   /**
    * La configuración srcDir especifica el directorio que debe contener los archivos TypeScript
    * de origen para cada componente. El estándar para las aplicaciones Stencil es usar src, que es el valor predeterminado.
    */
   srcDir?: string;
   /**
    * Establece si Stencil debe transformar las rutas de alias de los módulos establecidas en el `tsconfig.json` del proyecto
    * desde los alias de los módulos asignados a las rutas relativas resueltas.
    *
    * Este comportamiento por defecto es `true`, pero se puede optar por no usarlo configurando esta opción a `false`.
    */
   transformAliasedImportPaths?: boolean;
   /**
    * Cuando `true`, validaremos el `package.json` del proyecto basado en el objetivo de salida designado por el usuario
    * como `isPrimaryPackageOutputTarget: true` en su configuración de Stencil.
    */
   validatePrimaryPackageOutputTarget?: boolean;
   /**
    * Pasa configuración personalizada al "@rollup/plugin-commonjs" que Stencil utiliza internamente.
    * Para más información: https://stenciljs.com/docs/module-bundling
    */
   commonjs?: BundlingConfig;
   /**
    * Pasa configuración personalizada al "@rollup/plugin-node-resolve" que Stencil utiliza internamente.
    * Para más información: https://stenciljs.com/docs/module-bundling
    */
   nodeResolve?: NodeResolveConfig;
   /**
    * Pasa configuración personalizada a rollup en sí, no todas las opciones de rollup pueden ser sobrescritas.
    */
   rollupConfig?: RollupConfig;
   /**
    * Establece si se debe generar la compilación ES5 o no. Stencil genera una compilación moderna sin ES5,
    * mientras que esta configuración a `true` también creará compilaciones es5 tanto para modos de desarrollo como de producción. Configurar
    * `buildEs5` a `prod` solo construirá ES5 en modo de producción. Básicamente, si la aplicación no necesita ejecutarse
    * en navegadores antiguos (IE11 y Edge 18 y anteriores), es seguro no construir ES5, lo que también acelerará
    * los tiempos de compilación. El valor predeterminado es `false`.
    */
   buildEs5?: boolean | 'prod';
   /**
    * Establece si los archivos JS del navegador se minifican o no. Stencil usa `terser` internamente.
    * El valor predeterminado es `false` en modo desarrollo y `true` en modo producción.
    */
   minifyJs?: boolean;
   /**
    * Establece si el CSS se minifica o no.
    * El valor predeterminado es `false` en modo desarrollo y `true` en modo producción.
    */
   minifyCss?: boolean;
   /**
    * Obliga a Stencil a ejecutarse en modo `dev` si el valor es `true` y en modo `production`
    * si es `false`.
    *
    * El valor predeterminado es `false` (es decir, producción) a menos que se use la bandera `--dev` en la CLI.
    */
   devMode?: boolean;
   /**
    * Objeto para proporcionar un registrador personalizado. Por defecto, ya se proporciona un `logger` para la
    * plataforma en la que se está ejecutando el compilador, como NodeJS o un navegador.
    */
   logger?: Logger;
   /**
    * Configuración para agregar tiempo de ejecución adicional para características del DOM que requieren más polyfills. Toma en cuenta
    * que no todas las APIs del DOM están completamente polyfilled cuando se usa el polyfill de slots. Estos
    * son opcionales ya que no todos los usuarios requerirán el tiempo de ejecución adicional.
    */
   extras?: ConfigExtras;
   /**
    * La bandera hydrated identifica si un componente y todos sus componentes secundarios
    * han terminado de hidratarse. Esto ayuda a prevenir cualquier flash de contenido sin estilo (FOUC)
    * mientras varios componentes se descargan y renderizan de manera asincrónica. Por defecto,
    * agregará la clase CSS `hydrated` al elemento. La configuración `hydratedFlag` puede usarse
    * para cambiar el nombre de la clase CSS, cambiarla a un atributo, o cambiar qué
    * tipo de propiedades y valores CSS se asignan antes y después de la hidratación. Esta configuración
    * también puede usarse para no incluir la bandera hydrated en absoluto estableciéndola en `null`.
    */
   hydratedFlag?: HydratedFlag | null;
   /**
    * Ionic prefiere ocultar todos los componentes antes de la hidratación con una etiqueta de estilo añadida
    * a la cabeza del documento que contiene algunas reglas css de `visibility: hidden;`.
    *
    * Desactivar esto eliminará la etiqueta de estilo que establece `visibility: hidden;` en todos
    * los componentes web no hidratados. Esto sigue más de cerca la especificación HTML, y permite
    * establecer tu propio contenido de reserva.
    *
    */
   invisiblePrehydration?: boolean;
   /**
    * Establece la cola de tareas utilizada por el tiempo de ejecución de Stencil. La cola de tareas programa lecturas y escrituras del DOM
    * a lo largo de los fotogramas para renderizar de manera eficiente y reducir la agitación de diseño. Por defecto,
    * se usa `async`. Se recomienda también probar cada configuración para decidir cuál funciona
    * mejor para tu caso de uso. En todos los casos, si tu aplicación tiene muchas tareas intensivas en CPU que causan que el
    * hilo principal se bloquee periódicamente, siempre se recomienda intentar usar
    * [Web Workers](https://stenciljs.com/docs/web-workers) para esas tareas.
    *
    * - `async`: Las lecturas y escrituras del DOM se programan en el siguiente fotograma para evitar la agitación de diseño.
    *   Durante tareas intensivas en CPU no reprogramará la renderización para que ocurra en el siguiente fotograma.
    *   `async` es ideal para la mayoría de las aplicaciones, y si la aplicación tiene muchas tareas intensivas que causan que el hilo principal
    *   se bloquee, se recomienda intentar usar [Web Workers](https://stenciljs.com/docs/web-workers)
    *   en lugar de la cola de congestión async.
    *
    * - `congestionAsync`: Las lecturas y escrituras del DOM se programan en el siguiente fotograma para evitar la agitación
    *   de diseño. Cuando la aplicación está muy ocupada y la cola se congestiona, dividirá el trabajo en varios fotogramas para evitar bloquear el hilo principal. Sin embargo, también puede
    *   introducir reflujos innecesarios en algunos casos, especialmente durante el inicio. `congestionAsync`
    *   es ideal para aplicaciones que ejecutan animaciones mientras simultáneamente realizan tareas intensivas
    *   que pueden bloquear el hilo principal.
    *
    * - `immediate`: Hace que los callbacks de writeTask() y readTask() se ejecuten de forma sincrónica. Las tareas
    *   no se programan para ejecutarse en el siguiente fotograma, pero toma en cuenta que hay al menos una microtarea.
    *   La configuración `immediate` es ideal para aplicaciones que no proporcionan animaciones largas y fluidas.
    *   Al igual que la configuración async, si la aplicación tiene tareas intensivas que causan que el hilo principal
    *   se bloquee, se recomienda intentar usar [Web Workers](https://stenciljs.com/docs/web-workers).
    */
   taskQueue?: 'async' | 'immediate' | 'congestionAsync';
   /**
    * Proporciona un objeto de pares clave/valor accesibles dentro de la aplicación, utilizando el objeto `Env`.
    */
   env?: {
       [prop: string]: string | undefined;
   };
   globalScript?: string;
   srcIndexHtml?: string;
   watch?: boolean;
   testing?: TestingConfig;
   maxConcurrentWorkers?: number;
   preamble?: string;
   rollupPlugins?: {
       before?: any[];
       after?: any[];
   };
   entryComponentsHint?: string[];
   /**
    * Establece si Stencil escribirá archivos en `dist/` durante la compilación o no.
    *
    * De forma predeterminada, este valor se establece al valor opuesto de {@link devMode},
    * es decir, será `true` al compilar para producción y `false` al compilar para desarrollo.
    */
   buildDist?: boolean;
   buildLogFilePath?: string;
   devInspector?: boolean;
   devServer?: StencilDevServerConfig;
   sys?: CompilerSystem;
   tsconfig?: string;
   validateTypes?: boolean;
   /**
    * Una matriz de patrones RegExp que se comparan con todos los archivos fuente antes de agregarlos
    * a la lista de vigilancia en modo de vigilancia. Si la ruta del archivo coincide con alguno de los patrones, cuando se
    * actualice, no desencadenará una nueva ejecución de pruebas.
    */
   watchIgnoredRegex?: RegExp | RegExp[];
   /**
    * Establece si las dependencias no utilizadas deben excluirse de la salida compilada.
    */
   excludeUnusedDependencies?: boolean;
   stencilCoreResolvedId?: string;
  };
  

```