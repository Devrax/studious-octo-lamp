import { Component, Host, h, Prop, Listen, EventEmitter, Event, Method, Element } from '@stencil/core';
import { ShareData } from './share-data.interface';

@Component({
  tag: 'a-share',
  assetsDirs: ['assets'],
  styles: `
  .a-style:hover {
    color: blue;
    text-decoration: underline;
  }
  `
})
export class AShare{

  @Prop({ reflect: true }) urlTitle = '';
  @Prop({ reflect: true }) url = '';
  @Prop({ reflect: true }) text = '';
  @Prop() files: File[];

  @Event() hasShared: EventEmitter<boolean>;
  @Event() errorShare: EventEmitter<string>;

  @Element() el!: HTMLElement;

  render() {
    return (
        <Host class="a-style">
          <slot/>
          <img style={{width: '12px', height: '12px'}} src="assets/share.svg" alt="test"/>
          <slot name="end"/>
        </Host>
    )
  }

  @Listen('click')
  public onClick(): void {
    this.checkAttr();
  }

  @Listen('touchend')
  public onTouch(): void {
    this.checkAttr();
  }

  @Method()
  public getProperties() {
    return Promise.resolve({
        urlTitle: this.urlTitle,
        url: this.url,
        text: this.text,
        files: this.files
    });
  }

  /**
   * @description check if at least one of the attributes is specified
   * otherwise display an error in the console
   *
   * if the checking is successful, calls checkSharingApi method
   * @private
   */
  private checkAttr(): void {
    const { urlTitle: title, url, text, files } = this;
    const shareData = { title, url, text, files } as ShareData;
    const isOneAttrCompleted = Object.entries(shareData).some(data => !!data[1]);
    if(!isOneAttrCompleted ) {
        this.errorShare.emit('NO_ATTRIBUTES');
        throw new Error(`[NO ATTRIBUTES SPECIFIED]: At least one attribute [title, url, text, files] have to be added to the <a-share> tag`)
    };
    this.checkSharingApi(shareData);
  }

  /**
   * @description check if the browser does support sharing API
   *
   * if the user is sharing files this make
   * sure that the Web API sharing allow such thing.
   *
   * if everything okay, calls sharing method
   *
   * @param shareData
   */
  private checkSharingApi(shareData: ShareData) {
    if(!navigator.share) {
        this.errorShare.emit('NO_SUPPORT');
        throw new Error(`[NO SUPPORT FOR Web Share API]: It's seems that your browser doesn't support the Web Share API`);
    }
    if(shareData.files && !(navigator as any).canShare({files: shareData.files})) {
        this.errorShare.emit('NO_FILE_SHARING_SUPPORT');
        throw new Error(`[NO SUPPORT FOR FILE SHARING]: Your system or browser doesn't support sharing files.`)
    };
    this.sharing(shareData);
  }

  /**
   * @description invokes the Web Share API delegating
   * all the attributes specified
   *
   * @param shareData
   */
  private async sharing(shareData: ShareData) {
    try {
      await navigator.share(shareData);
      this.hasShared.emit(true);
    } catch(err) {
      this.hasShared.emit(false);
      throw new Error('Something went wrong while sharing...');
    }
  }

}