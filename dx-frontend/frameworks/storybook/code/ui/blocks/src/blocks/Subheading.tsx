import type { FC, PropsWithChildren } from 'react';
import React from 'react';
import { H3 } from '@storybook/components';
import { HeaderMdx } from './mdx';
import type { HeadingProps } from './Heading';

export const Subheading: FC<PropsWithChildren<HeadingProps>> = ({ children, disableAnchor }) => {
  if (disableAnchor || typeof children !== 'string') {
    return <H3>{children}</H3>;
  }
  const tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, '-');
  return (
    <HeaderMdx as="h3" id={tagID}>
      {children}
    </HeaderMdx>
  );
};
