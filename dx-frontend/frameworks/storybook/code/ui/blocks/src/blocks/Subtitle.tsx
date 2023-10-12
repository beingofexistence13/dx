import type { FunctionComponent, ReactNode } from 'react';
import React, { useContext } from 'react';
import { Subtitle as PureSubtitle } from '../components';
import { DocsContext } from './DocsContext';

interface SubtitleProps {
  children?: ReactNode;
}

export const Subtitle: FunctionComponent<SubtitleProps> = ({ children }) => {
  const docsContext = useContext(DocsContext);
  const { parameters } = docsContext.storyById();
  const content = children || parameters?.componentSubtitle;

  return content ? (
    <PureSubtitle className="sbdocs-subtitle sb-unstyled">{content}</PureSubtitle>
  ) : null;
};
