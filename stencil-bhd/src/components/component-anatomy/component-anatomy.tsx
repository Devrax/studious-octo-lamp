import { Component, Prop, State, Event, EventEmitter, Element, Watch, Method } from "@stencil/core";

@Component({
    tag: 'component-anatomy',
    // styles: `:host {}`, // Estilos embebidos directamente
    // styleUrl: "./component-anatomy.css", // Estilos externos en otro archivo
    // styleUrls: ["./component-anatomy.1.css", "./component-anatomy.2.css"], // Estilos externos dispersos en multiples archivos
    // scoped: true, // Es una implementación externa a lo que normalmente se ve con Shadow DOM que es una forma de encapsular componentes nativos web
    // assetsDirs: ["../assets"],
    // formAssociated: false,
    // shadow: true, // Encapsulación nativa web, es parte del estandar de Web Components
})
export class ComponentAnatomy {

    /* Decoradores de propiedad; */
    
    // Provocan re-renderizado
    @Prop() normalProp: string;
    @Prop({
        attribute: 'configured-prop', // Nombre personalizado del input
        mutable: true, // Para hacer un prop modificable desde adentro del componente
        reflect: true // Al modificar internamente el valor, si quieres que ese valor nuevo se refleje en attributes, debes ponerlo en true
    }) noAccessName: string;

    @State() normalState: boolean;

    // No provocan renderizado
    @Event() normalEvent: EventEmitter<boolean>;
    @Event({
        eventName: 'customNormalEvent', // Nombre personalizado del evento
        bubbles: true, // Si debe propagar su evento a los más altos en jerarquia
        cancelable: true, // Si el evento es cancelable
        composed: true, // Si este evento puede ser detectado fuera del Shadow DOM cuando este está en true
    }) configuredEvent: EventEmitter<boolean>;

    // Referencia del componente en si mismo
    @Element() iAmComponentAnatomyAsHTML: HTMLElement;

    /* Decoradores de métodos */

    @Method()
    async iAmAnExposedMethod(): Promise<void> {} // Este método queda expuesto de forma directa y puede ser invocado para hacer x o y cosa; Siempre debe retornar una promesa;

    @Watch('normalProp')
    runIfNormalPropChanges() {} // Corre si el @Prop llamado `normalProp` cambia; No se llama durante la primera carga del componente



    




}
