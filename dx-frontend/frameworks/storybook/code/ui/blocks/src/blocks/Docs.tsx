import React from 'react';
import type { ComponentType } from 'react';
import type { Renderer, Parameters } from '@storybook/types';
import type { Theme } from '@storybook/theming';

import type { DocsContextProps } from './DocsContext';
import { DocsContainer } from './DocsContainer';
import { DocsPage } from './DocsPage';

export type DocsProps<TRenderer extends Renderer = Renderer> = {
  docsParameter: Parameters;
  context: DocsContextProps<TRenderer>;
};

export function Docs<TRenderer extends Renderer = Renderer>({
  context,
  docsParameter,
}: DocsProps<TRenderer>) {
  const Container: ComponentType<{ context: DocsContextProps<TRenderer>; theme: Theme }> =
    docsParameter.container || DocsContainer;

  const Page = docsParameter.page || DocsPage;

  return (
    <Container context={context} theme={docsParameter.theme}>
      <Page />
    </Container>
  );
}
