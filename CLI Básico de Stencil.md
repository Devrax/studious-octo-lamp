# Resumen del Uso Básico del CLI de Stencil

## Comandos Más Usados

- **`stencil build`**
  - Compila el proyecto Stencil.
  - Utiliza el archivo `stencil.config.ts` para la configuración por defecto o uno personalizado.
  - Crea archivos en la carpeta `dist/` según la configuración de salida.

| parametros        | Descripción                          |
|---------------|------------------------------------------|
| `--dev`       | Development build                        |
| `--watch`     | Rebuild when files update                |
| `--serve`     | Start the dev-server                     |
| `--prerender` | Prerender the application                |
| `--docs`      | Generate component `readme.md` docs      |
| `--config`    | Set Stencil config file                  |
| `--stats`     | Write `stencil-stats.json` file          |
| `--log`       | Write `stencil-build.log` file           |
| `--debug`     | Set the log level to debug               |


- **`stencil start`**
  - Compila el proyecto en modo desarrollo y activa un servidor de desarrollo.
  - Utiliza la configuración de `stencil.config.ts`.
  - Permite el uso de `--dev` para modo desarrollo, `--watch` para observación de cambios, y `--serve` para servir la aplicación.

- **`stencil test`**
  - Ejecuta pruebas unitarias y de extremo a extremo.
  - Usa `--spec` para pruebas unitarias y `--e2e` para pruebas de extremo a extremo.
  - `--watchAll` ejecuta las pruebas en modo vigilancia.

- **`stencil generate` o `stencil g`**
  - Genera componentes, servicios u otros archivos según la plantilla de Stencil.

## Compilación de Componentes

- **Por Defecto**
  - Utiliza el archivo `stencil.config.ts` para la configuración de compilación. Ejemplo de como usar otro que no sea el por defecto `stencil build --config stencil.no-default-config.ts`
  - La configuración por defecto compila los archivos y los coloca en la carpeta `dist/`.

- **Configuración Personalizada**
  - Puedes crear un archivo `stencil.config.ts` personalizado en la raíz del proyecto.
  - El archivo debe exportar una configuración de Stencil que se adapte a tus necesidades.
  - La configuración personalizada se usa automáticamente cuando ejecutas los comandos de Stencil.

## Publicación en NPM

1. **Preparar el Paquete**
   - Asegúrate de que el archivo `package.json` esté correctamente configurado con el nombre, versión, y otros detalles del paquete.

2. **Autenticarse en NPM**
   - Asegúrate de estar autenticado en tu cuenta de NPM usando `npm login`.

3. **Publicar el Paquete**
   - Ejecuta `npm publish` en la raíz del proyecto para publicar el paquete en el registro de NPM.

4. **Versionar el Paquete**
   - Actualiza la versión en `package.json` usando `npm version [major|minor|patch]` antes de publicar nuevas versiones.

## Recursos Adicionales

- [Documentación Oficial de Stencil](https://stenciljs.com/docs/introduction)
- [CLI de Stencil en GitHub](https://github.com/ionic-team/stencil)

