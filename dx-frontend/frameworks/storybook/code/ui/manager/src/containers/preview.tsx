import { global } from '@storybook/global';
import React from 'react';

import type { Combo, StoriesHash } from '@storybook/manager-api';
import { Consumer } from '@storybook/manager-api';

import { Preview } from '../components/preview/preview';

const { PREVIEW_URL } = global;

export type Item = StoriesHash[keyof StoriesHash];

const splitTitleAddExtraSpace = (input: string) =>
  input.split('/').join(' / ').replace(/\s\s/, ' ');

const getDescription = (item: Item) => {
  if (item?.type === 'story' || item?.type === 'docs') {
    const { title, name } = item;
    return title && name ? splitTitleAddExtraSpace(`${title} - ${name} ⋅ Storybook`) : 'Storybook';
  }

  return item?.name ? `${item.name} ⋅ Storybook` : 'Storybook';
};

const mapper = ({ api, state }: Combo) => {
  const { layout, location, customQueryParams, storyId, refs, viewMode, path, refId } = state;
  const entry = api.getData(storyId, refId);

  return {
    api,
    entry,
    options: layout,
    description: getDescription(entry),
    viewMode,
    path,
    refs,
    storyId,
    baseUrl: PREVIEW_URL || 'iframe.html',
    queryParams: customQueryParams,
    location,
  };
};

const PreviewConnected = React.memo(function PreviewConnected(props: {
  id: string;
  withLoader: boolean;
}) {
  return (
    <Consumer filter={mapper}>{(fromState) => <Preview {...props} {...fromState} />}</Consumer>
  );
});

export default PreviewConnected;
