/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AShare {
        "files": File[];
        "getProperties": () => Promise<{ urlTitle: string; url: string; text: string; files: File[]; }>;
        "text": string;
        "url": string;
        "urlTitle": string;
    }
    interface ClockTime {
        "timeZoneOffset": number;
    }
}
export interface AShareCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAShareElement;
}
declare global {
    interface HTMLAShareElementEventMap {
        "hasShared": boolean;
        "errorShare": string;
    }
    interface HTMLAShareElement extends Components.AShare, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAShareElementEventMap>(type: K, listener: (this: HTMLAShareElement, ev: AShareCustomEvent<HTMLAShareElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAShareElementEventMap>(type: K, listener: (this: HTMLAShareElement, ev: AShareCustomEvent<HTMLAShareElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAShareElement: {
        prototype: HTMLAShareElement;
        new (): HTMLAShareElement;
    };
    interface HTMLClockTimeElement extends Components.ClockTime, HTMLStencilElement {
    }
    var HTMLClockTimeElement: {
        prototype: HTMLClockTimeElement;
        new (): HTMLClockTimeElement;
    };
    interface HTMLElementTagNameMap {
        "a-share": HTMLAShareElement;
        "clock-time": HTMLClockTimeElement;
    }
}
declare namespace LocalJSX {
    interface AShare {
        "files"?: File[];
        "onErrorShare"?: (event: AShareCustomEvent<string>) => void;
        "onHasShared"?: (event: AShareCustomEvent<boolean>) => void;
        "text"?: string;
        "url"?: string;
        "urlTitle"?: string;
    }
    interface ClockTime {
        "timeZoneOffset"?: number;
    }
    interface IntrinsicElements {
        "a-share": AShare;
        "clock-time": ClockTime;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "a-share": LocalJSX.AShare & JSXBase.HTMLAttributes<HTMLAShareElement>;
            "clock-time": LocalJSX.ClockTime & JSXBase.HTMLAttributes<HTMLClockTimeElement>;
        }
    }
}
