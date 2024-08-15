# Split Bundle y Lazy Loading en StencilJS

## Split Bundle

### ¿Qué es Split Bundle?
Es la técnica de dividir el código en paquetes más pequeños que se cargan independientemente, mejorando los tiempos de carga y el rendimiento.

### Split Bundle en StencilJS
StencilJS realiza la división automáticamente, agrupando componentes en paquetes que se cargan de forma diferida, optimizando las solicitudes de red. Aunque se puede personalizar con la configuración `bundles`, generalmente no es necesario.

## Lazy Loading

### ¿Qué es Lazy Loading?
Es una técnica que carga recursos solo cuando son necesarios, mejorando el rendimiento y reduciendo el uso de recursos.

### Lazy Loading en StencilJS
StencilJS implementa lazy loading automáticamente, cargando componentes solo cuando se requieren. Esto es útil en aplicaciones grandes, reduciendo el tiempo de carga inicial y mejorando la respuesta de la aplicación.

### Configuración en StencilJS
No se requiere configuración adicional para el lazy loading, pero se puede ajustar la agrupación de componentes si es necesario.
