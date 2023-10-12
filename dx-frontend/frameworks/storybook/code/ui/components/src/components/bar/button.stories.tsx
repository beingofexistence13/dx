import React from 'react';

import { IconButton, IconButtonSkeleton } from './button';
import { Icons } from '../icon/icon';

export default {
  component: IconButton,
};

export const Loading = () => <IconButtonSkeleton />;

// eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
export const _IconButton = () => (
  <IconButton>
    <Icons icon="bookmark" />
  </IconButton>
);

export const Active = () => (
  <IconButton active>
    <Icons icon="beaker" />
  </IconButton>
);

export const Disabled = () => (
  <IconButton disabled>
    <Icons icon="beaker" />
  </IconButton>
);

export const WithText = () => (
  <IconButton>
    <Icons icon="circlehollow" />
    &nbsp;Howdy!
  </IconButton>
);

export const WithTextActive = () => (
  <IconButton active>
    <Icons icon="circlehollow" />
    &nbsp;Howdy!
  </IconButton>
);

export const WithTextDisabled = () => (
  <IconButton disabled>
    <Icons icon="circlehollow" />
    &nbsp;Howdy!
  </IconButton>
);
