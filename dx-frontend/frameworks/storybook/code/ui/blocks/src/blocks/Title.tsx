import type { ComponentTitle } from '@storybook/types';
import type { FunctionComponent, ReactNode } from 'react';
import React, { useContext } from 'react';
import { Title as PureTitle } from '../components';
import { DocsContext } from './DocsContext';

interface TitleProps {
  children?: ReactNode;
}

const STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/;

export const extractTitle = (title: ComponentTitle) => {
  const groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
  return (groups && groups[groups.length - 1]) || title;
};

export const Title: FunctionComponent<TitleProps> = ({ children }) => {
  const context = useContext(DocsContext);
  const content = children || extractTitle(context.storyById().title);

  return content ? <PureTitle className="sbdocs-title sb-unstyled">{content}</PureTitle> : null;
};
