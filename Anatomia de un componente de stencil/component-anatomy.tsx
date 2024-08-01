import { Component, Prop, State, Event, EventEmitter, Element, Watch, Method, Listen } from "@stencil/core";

@Component({
    tag: 'component-anatomy',
    // styles: `:host {}`, // Estilos embebidos directamente
    // styleUrl: "./component-anatomy.css", // Estilos externos en otro archivo
    // styleUrls: ["./component-anatomy.1.css", "./component-anatomy.2.css"], // Estilos externos dispersos en multiples archivos
    // scoped: true, // Es una implementación externa a lo que normalmente se ve con Shadow DOM que es una forma de encapsular componentes nativos web; Custom-elements
    // assetsDirs: ["assets"],
    // formAssociated: false,
    // shadow: true, // Encapsulación nativa web, es parte del estandar de Web Components
})
export class ComponentAnatomy {



































 /** Métodos lifeCycles nativos de web-components */

 connectedCallback() {} // Este hook se invoca justo cuando el componente es montado en el documento
 disconnectedCallback() {} // Este hook se invoca justo cuando el componente es desmontado del documento

 /**
  * Hay otros hooks que son llamados pero que para esta presentacion no son necesarias presentar, pero si creo importantes conocer
  * 
  * `adoptedCallback()`: Si el elemento en cuestion movido a otra pagina html o documento ( Desconozco como se llama este evento )
  * `attributeChangedCallback()`: Si un atributo de este componente es alterado de alguna forma, este hook arranca ( No usar )
  */



 /**Métodos lifeCycles nativos de Stenciljs https://stenciljs.com/docs/component-lifecycle */

 // Se invoca una sola vez despues de llamar el hook `connectedCallback` para indicar que el componente iniciará
 componentWillLoad() {}

  // Se invoca despues del hook `componentWillLoad` y siempre antes de llamar el hook `render`
 componentWillRender() {}
 
 // Se invoca siempre que se programe renderizar los elementos del componente
 render() {}

 // Se invoca despues de haber llamado el hook `render` del componente
 componentDidRender() {} 

 // Se invoca siempre que un elemento @Prop o @State es alterado y se requiere un re-render
 componentShouldUpdate(newValue, oldValue, propName): boolean { return true } 

 // Se invoca despendiendo del boolean retornado por el hook `componentShouldUpdate`
 componentWillUpdate() {}

 // Se invoca despues del hook `componentWillUpdate` y al terminar los ciclos de `componentWillRender` -> `render` -> `componentDidRender`
 componentDidUpdate() {}

 //Se invoca una sola vez cuando ya todo el componente esta montado
 componentDidLoad() {}
























    /* Decoradores de propiedad; */
    
    // Provocan re-renderizado
    @Prop() normalProp: string;

    @Prop({
        // Nombre personalizado del input
        attribute: 'configured-prop',
         // Para hacer un prop modificable desde adentro del componente
        mutable: true,
        // Al modificar internamente el valor, si quieres que ese valor nuevo se refleje en attributes, debes ponerlo en true
        reflect: true
    })
    noAccessName: string;

    @State() normalState: boolean;

    // No provocan renderizado
    @Event() normalEvent: EventEmitter<boolean>;

    @Event({
        // Nombre personalizado del evento
        eventName: 'customNormalEvent',
         // Si debe propagar su evento a los más altos en jerarquia
        bubbles: true,
         // Si el evento es cancelable
        cancelable: true,
         // Si este evento puede ser detectado fuera del Shadow DOM cuando este está en true
        composed: true,
    })
    configuredEvent: EventEmitter<boolean>;

    // Referencia del componente asi si mismo
    @Element() iAmComponentAnatomyAsHTML: HTMLElement;



















    /* Decoradores de métodos */

    @Method()
    async iAmAnExposedMethod(): Promise<void> {} // Este método queda expuesto de forma directa y puede ser invocado para hacer x o y cosa; Siempre debe retornar una promesa;

    @Watch('normalProp')
    runIfNormalPropChanges() {} // Corre si el @Prop llamado `normalProp` cambia; No se llama durante la primera carga del componente

    @Listen('click') 
    listeningToTheAttachedEvent() {}

    @Listen('click', {
        target: 'body' || 'document' || 'window',
        capture: true, // https://www.quirksmode.org/js/events_order.html
        passive: true // https://developer.chrome.com/blog/passive-event-listeners?hl=es-419
    })
    listeningWithExtraOpts() {}

}
