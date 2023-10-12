import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'storybook-html',
  template: `<div [innerHTML]="safeContent"></div>`,
})
export default class HtmlComponent {
  /**
   * The HTML to render
   *
   * @required
   */
  @Input()
  content = '';

  constructor(private sanitizer: DomSanitizer) {}

  get safeContent() {
    return this.sanitizer.bypassSecurityTrustHtml(this.content);
  }
}
