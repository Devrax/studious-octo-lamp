Custom-element crudo

```javascript
class MyElement extends HTMLElement {
  constructor() {
    super();
    // Crear un shadow root
    this.attachShadow({ mode: 'open' });
    
    // Crear un contenedor de contenido
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'wrapper');

    // Crear un contenido dentro del contenedor
    const text = document.createElement('span');
    text.textContent = '¡Hola, soy un Custom Element!';

    // Añadir el contenido al shadow DOM
    this.shadowRoot.append(wrapper);
    wrapper.appendChild(text);

    // Añadir algunos estilos
    const style = document.createElement('style');
    style.textContent = `
      .wrapper {
        padding: 10px;
        background: lightgray;
        border: 1px solid black;
        border-radius: 5px;
      }
    `;
    this.shadowRoot.append(style);
  }
}

// Definir el nuevo elemento al DOM en donde se inyecte
customElements.define('my-element', MyElement);
```

Un componente con stencil

```typescript
import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-element',
  style: `.wrapper {
  padding: 10px;
  background: lightgray;
  border: 1px solid black;
  border-radius: 5px;
}
`
  shadow: true
})
export class MyElement {
  render() {
    return (
      <div class="wrapper">
        <span>¡Hola, soy un Custom Element!</span>
      </div>
    );
  }
}
```