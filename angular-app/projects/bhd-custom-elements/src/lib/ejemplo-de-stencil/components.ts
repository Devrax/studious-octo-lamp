/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'stencil-bhd';


@ProxyCmp({
  inputs: ['files', 'text', 'url', 'urlTitle'],
  methods: ['getProperties']
})
@Component({
  selector: 'a-share',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['files', 'text', 'url', 'urlTitle'],
})
export class AShare {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['hasShared', 'errorShare']);
  }
}


export declare interface AShare extends Components.AShare {

  hasShared: EventEmitter<CustomEvent<boolean>>;

  errorShare: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['timeZoneOffset']
})
@Component({
  selector: 'clock-time',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['timeZoneOffset'],
})
export class ClockTime {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ClockTime extends Components.ClockTime {}


