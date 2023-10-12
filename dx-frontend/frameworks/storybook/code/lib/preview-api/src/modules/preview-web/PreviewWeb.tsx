/* eslint-disable no-underscore-dangle */
import { global } from '@storybook/global';
import type { Renderer } from '@storybook/types';

import { PreviewWithSelection } from './PreviewWithSelection';
import { UrlStore } from './UrlStore';
import { WebView } from './WebView';

export class PreviewWeb<TFramework extends Renderer> extends PreviewWithSelection<TFramework> {
  constructor() {
    super(new UrlStore(), new WebView());

    global.__STORYBOOK_PREVIEW__ = this;
  }
}
